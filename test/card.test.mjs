import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import { loadCard } from "./load.mjs";

const { SmartThingsWasherCard, SmartThingsWasherCardEditor, swFindDevice, swEsc, swOptionLabel } = loadCard("smartthings-washer-card.js", [
  "SmartThingsWasherCard",
  "SmartThingsWasherCardEditor",
  "swFindDevice",
  "swEsc",
  "swOptionLabel",
]);

const st = (state, attributes = {}) => ({ state, attributes });
const FUTURE = () => new Date(Date.now() + 40 * 60000).toISOString();

// The Samsung washer exposed by the SmartThings integration (entity ids and options taken from a real DA_WM_TP1_21_COMMON).
function mockHass({ machine = "stop", job = "none", power = "on", remote = "on", childLock = "off", watts = "0", error } = {}) {
  const states = {
    "select.lave_linge": st(machine, { options: ["stop", "run", "pause"] }),
    "select.lave_linge_spin_level": st("1400", { options: ["rinse_hold", "no_spin", "400", "800", "1000", "1200", "1400"] }),
    "select.lave_linge_water_temperature": st("40", { options: ["none", "cold", "20", "30", "40", "60", "90"] }),
    "sensor.lave_linge_machine_state": st(machine, { options: ["pause", "run", "stop"], device_class: "enum" }),
    "sensor.lave_linge_etat_du_cycle": st(job, {
      options: ["air_wash", "ai_rinse", "ai_spin", "ai_wash", "cooling", "delay_wash", "drying", "finish", "none", "pre_wash", "rinse", "spin", "wash"],
      device_class: "enum",
    }),
    "sensor.lave_linge_completion_time": st(FUTURE(), { device_class: "timestamp" }),
    "sensor.lave_linge_puissance": st(watts, { device_class: "power", unit_of_measurement: "W" }),
    "sensor.lave_linge_energie": st("1.2", { device_class: "energy", unit_of_measurement: "kWh" }),
    "binary_sensor.lave_linge_puissance": st(power, { device_class: "power" }),
    "binary_sensor.lave_linge_remote_control": st(remote),
    "binary_sensor.lave_linge_child_lock": st(childLock),
    "switch.lave_linge_bubble_soak": st("off"),
    // Another SmartThings-free device, to make sure it is never picked.
    "sensor.other_state": st("run", { options: ["run", "stop"] }),
  };
  const entities = {};
  for (const id of Object.keys(states)) {
    entities[id] = { entity_id: id, device_id: id.includes("other_") ? "d-other" : "d-wm", platform: "smartthings" };
  }
  const calls = [];
  return {
    language: "fr",
    states,
    entities,
    devices: { "d-other": { name: "Autre" }, "d-wm": { name: "Lave-linge" } },
    calls,
    callService(domain, service, data, target, notifyOnError) {
      calls.push({ domain, service, data, target, notifyOnError });
      return error ? Promise.reject({ code: "home_assistant_error", message: error }) : Promise.resolve();
    },
  };
}

function render(hass, config = {}) {
  const card = new SmartThingsWasherCard();
  card.setConfig({ device_id: "d-wm", ...config });
  card.hass = hass;
  return card;
}

// Clicks a button by its data-action, as the shadow root listener receives it, unless the rendered button is disabled.
function click(c, action) {
  const m = c.shadowRoot.innerHTML.match(new RegExp(`<button[^>]*data-action="${action}"[^>]*>`));
  assert.ok(m, `no ${action} button`);
  c._onClick({ composedPath: () => [{ dataset: { action }, disabled: / disabled[ >]/.test(m[0]) }] });
}

const flush = () => new Promise((resolve) => setImmediate(resolve));

beforeEach(() => mock.timers.enable({ apis: ["setTimeout"] }));
afterEach(() => mock.timers.reset());

test("the washer is found among the devices, and no config is needed", () => {
  const hass = mockHass();
  assert.equal(swFindDevice(hass), "d-wm");
  assert.deepEqual({ ...SmartThingsWasherCard.getStubConfig(hass) }, { device_id: "d-wm" });
  const card = new SmartThingsWasherCard();
  card.setConfig({});
  card.hass = hass;
  assert.match(card.shadowRoot.innerHTML, /Lave-linge/);
});

test("a device that doesn't come from SmartThings is never picked", () => {
  const hass = mockHass();
  for (const e of Object.values(hass.entities)) e.platform = "home_connect";
  assert.equal(swFindDevice(hass), undefined);
});

test("no washer: the card says so", () => {
  const card = new SmartThingsWasherCard();
  card.setConfig({});
  card.hass = { language: "en", states: {}, entities: {}, devices: {} };
  assert.match(card.shadowRoot.innerHTML, /No SmartThings washing machine found/);
});

test("powered off: shows Éteint and no controls", () => {
  const html = render(mockHass({ power: "off" })).shadowRoot.innerHTML;
  assert.match(html, /Éteint/);
  assert.doesNotMatch(html, /data-action=/);
});

test("idle with remote control off: Start is disabled and the card explains why", () => {
  const html = render(mockHass({ remote: "off" })).shadowRoot.innerHTML;
  assert.match(html, /Prêt/);
  assert.match(html, /data-action="start" disabled/);
  assert.match(html, /Contrôle à distance désactivé/);
  assert.match(html, /Activez le contrôle à distance/);
  assert.match(html, /data-select="select\.lave_linge_spin_level" disabled/);
});

test("idle with remote control on: Start and the options are enabled, labelled in French", () => {
  const html = render(mockHass()).shadowRoot.innerHTML;
  assert.match(html, /data-action="start">/);
  assert.match(html, /<option value="1400" selected>1400 tr\/min<\/option>/);
  assert.match(html, /<option value="rinse_hold">Arrêt cuve pleine<\/option>/);
  assert.match(html, /<option value="40" selected>40 °C<\/option>/);
  assert.match(html, /<option value="cold">Froid<\/option>/);
  assert.match(html, /data-toggle="switch\.lave_linge_bubble_soak"/);
  // The run / pause / stop select is the control, not an option.
  assert.doesNotMatch(html, /data-select="select\.lave_linge"/);
});

test("running: step, finish time, estimated progress, power; no Start", () => {
  const html = render(mockHass({ machine: "run", job: "rinse", watts: "412" })).shadowRoot.innerHTML;
  assert.match(html, /En cours · Rinçage/);
  assert.match(html, /Fin à .* · reste 40 min/);
  assert.match(html, /412 W/);
  assert.match(html, /data-action="pause"/);
  assert.match(html, /data-action="stop"/);
  assert.doesNotMatch(html, /data-action="start"/);
  assert.doesNotMatch(html, /class="section"/);
});

test("paused: Resume and Stop", () => {
  const html = render(mockHass({ machine: "pause", job: "wash" })).shadowRoot.innerHTML;
  assert.match(html, /En pause · Lavage/);
  assert.match(html, /data-action="resume"/);
  assert.doesNotMatch(html, /data-action="pause"/);
});

test("finished: Terminé, and the stale finish time is not shown", () => {
  const hass = mockHass({ machine: "stop", job: "finish" });
  hass.states["sensor.lave_linge_completion_time"] = st("2026-01-01T10:00:00+00:00", { device_class: "timestamp" });
  const html = render(hass).shadowRoot.innerHTML;
  assert.match(html, /Terminé/);
  assert.doesNotMatch(html, /Fin à/);
  assert.match(html, /100 %/);
});

test("child lock shows as a chip", () => {
  assert.match(render(mockHass({ childLock: "on" })).shadowRoot.innerHTML, /Sécurité enfant/);
  assert.doesNotMatch(render(mockHass({ childLock: "off" })).shadowRoot.innerHTML, /Sécurité enfant/);
});

test("an unknown step name is escaped", () => {
  const hass = mockHass({ machine: "run", job: '<img src=x onerror="alert(1)">' });
  const html = render(hass).shadowRoot.innerHTML;
  assert.doesNotMatch(html, /<img src=x/);
});

test("swEsc and swOptionLabel", () => {
  assert.equal(swEsc(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(swEsc(null), "");
  assert.equal(swOptionLabel("en", "spin_level", "800"), "800 rpm");
  assert.equal(swOptionLabel("en", "water_temperature", "no_spin"), "No spin");
  assert.equal(swOptionLabel("en", "option", "some_new_value"), "Some new value");
});

test("entity ids from the config are escaped in data attributes", () => {
  const hass = mockHass();
  const bad = 'select.x"><img src=x>';
  hass.states[bad] = st("a", { options: ["a"] });
  const html = render(hass, { entities: { spin_level: bad } }).shadowRoot.innerHTML;
  assert.doesNotMatch(html, /<img src=x>/);
  assert.match(html, /data-select="select\.x&quot;&gt;&lt;img src=x&gt;"/);
});

test("start sends run to the control select, without Home Assistant's own toast", async () => {
  const hass = mockHass();
  const c = render(hass);
  click(c, "start");
  await flush();
  assert.equal(hass.calls.length, 1);
  assert.deepEqual({ ...hass.calls[0].data }, { entity_id: "select.lave_linge", option: "run" });
  assert.equal(hass.calls[0].notifyOnError, false);
});

test("pause, resume and stop all use the control select; stop needs a second tap", async () => {
  const hass = mockHass({ machine: "run", job: "wash" });
  const c = render(hass);
  click(c, "pause");
  await flush();
  assert.deepEqual({ ...hass.calls[0].data }, { entity_id: "select.lave_linge", option: "pause" });
  click(c, "stop");
  await flush();
  assert.equal(hass.calls.length, 1);
  assert.match(c.shadowRoot.innerHTML, /Confirmer \?/);
  click(c, "stop");
  await flush();
  assert.deepEqual({ ...hass.calls[1].data }, { entity_id: "select.lave_linge", option: "stop" });
  hass.states["select.lave_linge"] = st("pause", { options: ["stop", "run", "pause"] });
  hass.states["sensor.lave_linge_machine_state"] = st("pause", { options: ["pause", "run", "stop"] });
  c.hass = { ...hass, states: { ...hass.states } };
  click(c, "resume");
  await flush();
  assert.deepEqual({ ...hass.calls[2].data }, { entity_id: "select.lave_linge", option: "run" });
});

test("start: a timeout is retried once after 3 s", async () => {
  const hass = mockHass();
  let n = 0;
  hass.callService = (domain, service, data) => {
    hass.calls.push({ domain, service, data });
    return n++ === 0 ? Promise.reject({ message: "Request timeout" }) : Promise.resolve();
  };
  const c = render(hass);
  click(c, "start");
  await flush();
  assert.equal(hass.calls.length, 1);
  assert.match(c.shadowRoot.innerHTML, /data-action="start" disabled>.*Démarrage…/);
  mock.timers.tick(3000);
  await flush();
  assert.equal(hass.calls.length, 2);
  assert.doesNotMatch(c.shadowRoot.innerHTML, /class="error"/);
});

test("start: another error is shown in the card with no retry, and goes away on the next state change", async () => {
  const hass = mockHass({ error: "Command rejected" });
  const c = render(hass);
  click(c, "start");
  await flush();
  mock.timers.tick(3000);
  await flush();
  assert.equal(hass.calls.length, 1);
  assert.match(c.shadowRoot.innerHTML, /Le cycle n&#39;a pas pu démarrer/);
  hass.states["sensor.lave_linge_machine_state"] = st("run", { options: ["pause", "run", "stop"] });
  c.hass = { ...hass, states: { ...hass.states } };
  assert.doesNotMatch(c.shadowRoot.innerHTML, /class="error"/);
});

test("changing a select option calls select_option", () => {
  const hass = mockHass();
  const c = render(hass);
  c._onChange({ target: { dataset: { select: "select.lave_linge_spin_level" }, value: "800", blur() {} } });
  assert.deepEqual({ ...hass.calls[0].data }, { entity_id: "select.lave_linge_spin_level", option: "800" });
});

function editor(config, language = "en") {
  const ed = new SmartThingsWasherCardEditor();
  ed.setConfig(config);
  ed.hass = { language };
  return ed;
}

test("editor targets the SmartThings integration and follows the language option", () => {
  const schema = editor({})._schema();
  assert.deepEqual({ ...schema[0].selector.device }, { integration: "smartthings" });
  assert.equal(editor({})._form.computeLabel({ name: "name" }), "Name");
  assert.equal(editor({ language: "fr" })._form.computeLabel({ name: "name" }), "Nom");
  assert.equal(editor({ language: "fr" })._form.computeLabel({ name: "control" }), "Commande (marche / pause / arrêt)");
});

test("editor offers every entity override", () => {
  const roles = editor({})._schema().find((s) => s.name === "entities").schema.map((s) => s.name);
  for (const r of ["machine_state", "job_state", "completion_time", "control", "remote_control", "spin_level", "water_temperature"]) {
    assert.ok(roles.includes(r), r);
  }
});

test("the card is registered once, with the editor", () => {
  const { customElements } = loadCard("smartthings-washer-card.js", []);
  assert.ok(customElements.get("smartthings-washer-card"));
  assert.ok(customElements.get("smartthings-washer-card-editor"));
});
