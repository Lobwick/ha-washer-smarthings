var SMARTTHINGS_WASHER_CARD_VERSION = '__VERSION__';

// ── i18n ──────────────────────────────────────────────────────────────────────
var SwI18n = {
  fr: {
    washer: 'Lave-linge',
    st_run: 'En cours',
    st_pause: 'En pause',
    st_ready: 'Prêt',
    st_finished: 'Terminé',
    st_off: 'Éteint',
    st_unavailable: 'Indisponible',
    job_air_wash: 'Lavage à l\'air',
    job_ai_rinse: 'Rinçage IA',
    job_ai_spin: 'Essorage IA',
    job_ai_wash: 'Lavage IA',
    job_cooling: 'Refroidissement',
    job_delay_wash: 'Départ différé',
    job_drying: 'Séchage',
    job_finish: 'Terminé',
    job_pre_wash: 'Prélavage',
    job_rinse: 'Rinçage',
    job_spin: 'Essorage',
    job_wash: 'Lavage',
    job_weight_sensing: 'Pesée du linge',
    job_wrinkle_prevent: 'Anti-froissage',
    job_freeze_protection: 'Protection antigel',
    opt_rinse_hold: 'Arrêt cuve pleine',
    opt_no_spin: 'Sans essorage',
    opt_cold: 'Froid',
    opt_none: 'Aucune',
    rpm: 'tr/min',
    ends_at: 'Fin à',
    remaining: 'reste {t}',
    start: 'Démarrer',
    stop: 'Arrêter',
    confirm: 'Confirmer ?',
    pause: 'Pause',
    resume: 'Reprendre',
    options: 'Options',
    starting: 'Démarrage…',
    start_rejected: 'La machine a refusé le démarrage. Vérifiez qu\'un programme est lancé sur la machine et que le contrôle à distance est activé, puis réessayez.',
    start_failed: 'Le cycle n\'a pas pu démarrer.',
    command_failed: 'La machine n\'a pas répondu à la commande.',
    remote_off: 'Contrôle à distance désactivé',
    remote_off_hint: 'Activez le contrôle à distance sur la machine pour la piloter d\'ici.',
    child_lock: 'Sécurité enfant',
    offline: 'Machine hors ligne',
    no_device: 'Aucun lave-linge SmartThings trouvé',
    ed_device: 'Appareil',
    ed_device_helper: 'Lave-linge de l\'intégration SmartThings',
    ed_name: 'Nom',
    ed_name_helper: 'Laisser vide pour le nom de l\'appareil',
    ed_icon: 'Icône',
    ed_show_controls: 'Boutons de commande',
    ed_show_options: 'Options du cycle',
    ed_show_chips: 'Pastilles d\'information',
    ed_language: 'Langue',
    ed_language_helper: 'Laisser vide pour suivre la langue de Home Assistant',
    ed_entities: 'Entités (avancé)',
    ed_entities_helper: 'Détectées automatiquement depuis l\'appareil ; à renseigner seulement pour forcer une entité',
    en_machine_state: 'État de la machine',
    en_job_state: 'Étape du cycle',
    en_completion_time: 'Heure de fin',
    en_control: 'Commande (marche / pause / arrêt)',
    en_remote_control: 'Contrôle à distance',
    en_child_lock: 'Sécurité enfant',
    en_power_state: 'Alimentation',
    en_power_w: 'Puissance',
    en_spin_level: 'Niveau d\'essorage',
    en_water_temperature: 'Température de l\'eau',
  },
  en: {
    washer: 'Washing machine',
    st_run: 'Running',
    st_pause: 'Paused',
    st_ready: 'Ready',
    st_finished: 'Finished',
    st_off: 'Off',
    st_unavailable: 'Unavailable',
    job_air_wash: 'Air wash',
    job_ai_rinse: 'AI rinse',
    job_ai_spin: 'AI spin',
    job_ai_wash: 'AI wash',
    job_cooling: 'Cooling',
    job_delay_wash: 'Delayed start',
    job_drying: 'Drying',
    job_finish: 'Finished',
    job_pre_wash: 'Pre-wash',
    job_rinse: 'Rinse',
    job_spin: 'Spin',
    job_wash: 'Wash',
    job_weight_sensing: 'Weighing laundry',
    job_wrinkle_prevent: 'Wrinkle prevent',
    job_freeze_protection: 'Freeze protection',
    opt_rinse_hold: 'Rinse hold',
    opt_no_spin: 'No spin',
    opt_cold: 'Cold',
    opt_none: 'None',
    rpm: 'rpm',
    ends_at: 'Ends at',
    remaining: '{t} left',
    start: 'Start',
    stop: 'Stop',
    confirm: 'Confirm?',
    pause: 'Pause',
    resume: 'Resume',
    options: 'Options',
    starting: 'Starting…',
    start_rejected: 'The machine refused to start. Check that a cycle is set on the machine and that remote control is enabled, then try again.',
    start_failed: 'The cycle couldn\'t start.',
    command_failed: 'The machine didn\'t respond to the command.',
    remote_off: 'Remote control disabled',
    remote_off_hint: 'Enable remote control on the machine to operate it from here.',
    child_lock: 'Child lock',
    offline: 'Machine offline',
    no_device: 'No SmartThings washing machine found',
    ed_device: 'Appliance',
    ed_device_helper: 'Washing machine from the SmartThings integration',
    ed_name: 'Name',
    ed_name_helper: 'Leave empty to use the device name',
    ed_icon: 'Icon',
    ed_show_controls: 'Control buttons',
    ed_show_options: 'Cycle options',
    ed_show_chips: 'Info chips',
    ed_language: 'Language',
    ed_language_helper: 'Leave empty to follow the Home Assistant language',
    ed_entities: 'Entities (advanced)',
    ed_entities_helper: 'Detected from the device automatically; only set one to override it',
    en_machine_state: 'Machine state',
    en_job_state: 'Cycle step',
    en_completion_time: 'Finish time',
    en_control: 'Control (run / pause / stop)',
    en_remote_control: 'Remote control',
    en_child_lock: 'Child lock',
    en_power_state: 'Power',
    en_power_w: 'Power draw',
    en_spin_level: 'Spin level',
    en_water_temperature: 'Water temperature',
  },
};

function swT(lang, key) {
  var strings = SwI18n[lang] || SwI18n.en;
  return strings[key] || SwI18n.en[key] || key;
}

function swEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Service call errors from Home Assistant: a websocket error object ({ code, message }) or an Error.
function swErrText(err) {
  if (!err) return '';
  return String(err.message || err.error?.message || err.code || err);
}

// Rejections the cloud or the machine often sends for a moment: worth one retry.
var SW_RETRYABLE = /timeout|timed out|\b409\b|\b429\b|\b50[0-4]\b|busy/i;
var SW_RETRY_DELAY = 3000;
var SW_ERROR_TIMEOUT = 10000;

function swDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Roles ─────────────────────────────────────────────────────────────────────
var SW_STATE_COLORS = {
  run: 'var(--info-color, #039be5)',
  ready: 'var(--info-color, #039be5)',
  pause: 'var(--warning-color, #ffa600)',
  finished: 'var(--success-color, #43a047)',
};

var SW_TYPE = 'smartthings-washer-card';
var SW_PLATFORM = 'smartthings';
var SW_ICON = 'mdi:washing-machine';

var swOptionsOf = (s) => s?.attributes?.options || [];

// Roles the card looks for on the device. Each matcher tries the entity registry
// translation_key first, then the entity_id suffix (French and English slugs),
// then attributes, so it works whatever language the entities were created in.
var SW_ROLES = {
  machine_state: { domain: 'sensor', keys: ['machine_state', 'washer_machine_state'], id: /(machine_state|etat_de_la_machine)$/,
    test: (s) => { var o = swOptionsOf(s); return o.indexOf('run') >= 0 && o.indexOf('stop') >= 0 && o.indexOf('pause') >= 0; } },
  job_state: { domain: 'sensor', keys: ['washer_job_state', 'job_state'], id: /(job_state|etat_du_cycle|etat_de_la_tache)$/,
    test: (s) => { var o = swOptionsOf(s); return o.indexOf('wash') >= 0 && o.indexOf('rinse') >= 0; } },
  completion_time: { domain: 'sensor', keys: ['completion_time', 'washer_completion_time'], id: /(completion_time|heure_de_fin)$/,
    test: (s) => s.attributes.device_class === 'timestamp' },
  control: { domain: 'select', keys: ['washer_machine_state', 'operating_state', 'machine_state'], id: null,
    test: (s) => { var o = swOptionsOf(s); return o.indexOf('run') >= 0 && o.indexOf('stop') >= 0 && o.indexOf('pause') >= 0; } },
  remote_control: { domain: 'binary_sensor', keys: ['remote_control'], id: /(remote_control|controle_a_distance)$/ },
  child_lock: { domain: 'binary_sensor', keys: ['child_lock'], id: /(child_lock|securite_enfant)$/ },
  power_state: { domain: 'binary_sensor', keys: ['power'], id: /(_power|_puissance|_alimentation)$/,
    test: (s) => s.attributes.device_class === 'power' },
  power_w: { domain: 'sensor', keys: ['power'], id: /(_power|_puissance)$/,
    test: (s) => s.attributes.device_class === 'power' && s.attributes.unit_of_measurement === 'W' },
  spin_level: { domain: 'select', keys: ['spin_level'], id: /(spin_level|niveau_d_essorage)$/ },
  water_temperature: { domain: 'select', keys: ['water_temperature'], id: /(water_temperature|temperature_de_l_eau)$/ },
};

var SW_OVERRIDABLE = Object.keys(SW_ROLES);

// Registry entries grouped by device, built once per `hass.entities` object (it only changes with the registry).
var swRegistryIndex = new WeakMap();
function swRegistryByDevice(reg) {
  var index = swRegistryIndex.get(reg);
  if (!index) {
    index = new Map();
    Object.values(reg).forEach((e) => {
      if (!e.device_id || e.hidden) return;
      if (!index.has(e.device_id)) index.set(e.device_id, []);
      index.get(e.device_id).push(e);
    });
    swRegistryIndex.set(reg, index);
  }
  return index;
}

function swDeviceEntities(hass, deviceId) {
  if (!hass?.entities || !deviceId) return [];
  return (swRegistryByDevice(hass.entities).get(deviceId) || []).filter((e) => hass.states[e.entity_id]);
}

function swFindRole(hass, list, role, taken) {
  var m = SW_ROLES[role];
  var inDomain = list.filter((e) => e.entity_id.split('.')[0] === m.domain && taken.indexOf(e.entity_id) < 0);
  var hit = inDomain.find((e) => m.keys.indexOf(e.translation_key) >= 0 && (!m.test || m.test(hass.states[e.entity_id])));
  if (!hit && m.id) hit = inDomain.find((e) => m.id.test(e.entity_id) && (!m.test || m.test(hass.states[e.entity_id])));
  if (!hit && m.test) hit = inDomain.find((e) => m.test(hass.states[e.entity_id]));
  if (!hit && !m.test) hit = inDomain.find((e) => m.keys.indexOf(e.translation_key) >= 0);
  return hit ? hit.entity_id : undefined;
}

// A SmartThings washer: a select that takes run / pause / stop and a sensor with the wash cycle steps.
function swIsWasher(hass, deviceId) {
  var list = swDeviceEntities(hass, deviceId);
  // When the registry says which integration each entity comes from, at least one must be SmartThings.
  var withPlatform = list.filter((e) => e.platform);
  if (withPlatform.length && !withPlatform.some((e) => e.platform === SW_PLATFORM)) return false;
  var hasControl = list.some((e) => e.entity_id.indexOf('select.') === 0 && SW_ROLES.control.test(hass.states[e.entity_id]));
  var hasJob = list.some((e) => e.entity_id.indexOf('sensor.') === 0 && SW_ROLES.job_state.test(hass.states[e.entity_id]));
  return hasControl && hasJob;
}

// The device found is remembered per `hass.devices` object; a miss is searched again next time.
var swFoundDevices = new WeakMap();
function swFindDevice(hass) {
  if (!hass?.devices) return undefined;
  var found = swFoundDevices.get(hass.devices);
  if (!found) swFoundDevices.set(hass.devices, (found = {}));
  var id = found.washer;
  if (id && hass.devices[id] && swIsWasher(hass, id)) return id;
  id = Object.keys(hass.devices).find((d) => swIsWasher(hass, d));
  if (id) found.washer = id;
  return id;
}

// Fallback label for a SmartThings option value when HA has no translation for it:
// "1400" on the spin select → "1400 rpm", "40" on the temperature select → "40 °C".
function swOptionLabel(lang, role, value) {
  var v = String(value == null ? '' : value);
  if (/^\d+$/.test(v)) {
    if (role === 'spin_level') return `${v} ${swT(lang, 'rpm')}`;
    if (role === 'water_temperature') return `${v} °C`;
    return v;
  }
  var key = `opt_${v}`;
  var known = swT(lang, key);
  if (known !== key) return known;
  v = v.replace(/_/g, ' ').trim();
  return v.charAt(0).toUpperCase() + v.slice(1);
}

// ── Estimated progress ───────────────────────────────────────────────────────
// SmartThings gives the finish time but no percentage. The longest remaining time seen since
// the cycle started is taken as the total; it is kept in the browser so a reload doesn't lose it.
var swTotals = {};
var SW_TOTAL_MAX_AGE = 12 * 3600 * 1000;

function swStorage(op, key, value) {
  try {
    if (op === 'get') return localStorage.getItem(key);
    if (op === 'set') localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    // Storage can be blocked: the estimate then only lives while the page does.
  }
  return null;
}

function swCycleTotal(deviceKey, running, remainingMs) {
  var key = `smartthings-washer-card:total:${deviceKey}`;
  if (!running) {
    if (swTotals[deviceKey]) {
      delete swTotals[deviceKey];
      swStorage('remove', key);
    }
    return 0;
  }
  var now = Date.now();
  var mem = swTotals[deviceKey];
  if (!mem) {
    mem = { total: 0, at: now };
    try {
      var saved = JSON.parse(swStorage('get', key));
      if (saved && now - saved.at < SW_TOTAL_MAX_AGE) mem = saved;
    } catch {
      // Corrupt entry: start again.
    }
    swTotals[deviceKey] = mem;
  }
  if (remainingMs > mem.total) {
    mem.total = remainingMs;
    mem.at = now;
    swStorage('set', key, JSON.stringify(mem));
  }
  return mem.total;
}

// ── Card ─────────────────────────────────────────────────────────────────────
class SmartThingsWasherCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement('smartthings-washer-card-editor');
  }

  static getStubConfig(hass) {
    var id = swFindDevice(hass);
    return id ? { device_id: id } : {};
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = Object.assign({ show_controls: true, show_options: true, show_chips: true }, config);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
      this.shadowRoot.addEventListener('change', (ev) => this._onChange(ev));
    }
    this._sig = null;
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    // Refresh the remaining time every 30 s while a cycle with a finish time runs and the card is on screen.
    clearInterval(this._timer);
    this._timer = setInterval(() => {
      if (!this._ticking) return;
      this._sig = null;
      this._update();
    }, 30000);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    clearTimeout(this._confirmTimer);
    clearTimeout(this._errorTimer);
  }

  getCardSize() { return 3; }

  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _lang() {
    var l = (this._config?.language) || (this._hass?.language) || document.documentElement.lang || 'en';
    l = l.split('-')[0];
    return SwI18n[l] ? l : 'en';
  }

  _t(k) { return swT(this._lang(), k); }

  _deviceId() {
    var hass = this._hass, c = this._config;
    if (c.device_id) return c.device_id;
    if (c.entity && hass.entities?.[c.entity]) return hass.entities[c.entity].device_id;
    return swFindDevice(hass);
  }

  _resolve() {
    var hass = this._hass, c = this._config;
    var deviceId = this._deviceId();
    var list = swDeviceEntities(hass, deviceId);
    var over = c.entities || {};
    var ent = {};
    var taken = Object.keys(over).map((k) => over[k]).filter(Boolean);
    SW_OVERRIDABLE.forEach((role) => {
      ent[role] = over[role] || swFindRole(hass, list, role, taken);
      if (ent[role]) taken.push(ent[role]);
    });
    var used = Object.values(ent);
    // Everything else the integration exposes as a switch or select is a cycle option.
    ent.option_switches = list.map((e) => e.entity_id).filter((id) => id.indexOf('switch.') === 0 && used.indexOf(id) < 0);
    ent.option_selects = list.map((e) => e.entity_id).filter((id) => id.indexOf('select.') === 0 && used.indexOf(id) < 0);
    return { deviceId: deviceId, ent: ent };
  }

  _st(id) { return id && this._hass.states[id]; }

  _val(id) { var s = this._st(id); return s ? s.state : undefined; }

  _avail(id) { var v = this._val(id); return v !== undefined && v !== 'unavailable' && v !== 'unknown'; }

  _fmt(id, role, value) {
    var s = this._st(id);
    var v = value === undefined ? (s ? s.state : '') : value;
    if (s && this._hass.formatEntityState) {
      var out = this._hass.formatEntityState(s, v);
      // Without a translation HA echoes the raw key back.
      if (out && out !== v && !/^\d+$/.test(String(v))) return out;
    }
    return swOptionLabel(this._lang(), role, v);
  }

  _entityLabel(id, deviceName) {
    var s = this._st(id);
    var name = (s?.attributes.friendly_name) || id;
    if (deviceName && name.indexOf(deviceName) === 0) name = name.slice(deviceName.length).trim();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  _update() {
    if (!this._config || !this._hass || !this.shadowRoot) return;
    var r = this._resolve();
    var ids = [r.ent.machine_state, r.ent.job_state, r.ent.completion_time, r.ent.control, r.ent.remote_control,
      r.ent.child_lock, r.ent.power_state, r.ent.power_w, r.ent.spin_level, r.ent.water_temperature].concat(r.ent.option_switches, r.ent.option_selects);
    var hass = this._hass;
    var states = JSON.stringify(ids.map((id) => {
      var s = id && hass.states[id];
      return s ? [id, s.state, s.attributes.options] : null;
    }));
    // An error message goes away as soon as the machine's state changes.
    if (this._error) {
      if (this._error.states == null) this._error.states = states;
      else if (this._error.states !== states) this._clearError();
    }
    var sig = JSON.stringify([this._lang(), r.deviceId, this._confirming, this._starting,
      this._error ? [this._error.key, this._error.detail] : null, states]);
    if (sig === this._sig) return;
    // Don't rebuild while a dropdown is open in the card.
    var active = this.shadowRoot.activeElement;
    if (active && active.tagName === 'SELECT') return;
    this._sig = sig;
    this._r = r;
    this._render(r);
  }

  _render(r) {
    var c = this._config, ent = r.ent, hass = this._hass, lang = this._lang();
    var dev = r.deviceId && hass.devices ? hass.devices[r.deviceId] : null;
    var deviceName = dev ? String(dev.name_by_user || dev.name || '').trim() : '';
    var name = c.name || deviceName || this._t('washer');
    var icon = c.icon || SW_ICON;
    this._ticking = false;

    if (!r.deviceId && !c.entities) {
      this.shadowRoot.innerHTML = `${this._styles()}<ha-card><div class="empty"><ha-icon icon="${swEsc(icon)}"></ha-icon>${this._t('no_device')}</div></ha-card>`;
      return;
    }

    // State: SmartThings only says run / pause / stop, so "finished" and "off" come from the other entities.
    var machine = this._val(ent.machine_state);
    var job = this._val(ent.job_state);
    var online = this._avail(ent.machine_state);
    var powerOn = ent.power_state ? this._val(ent.power_state) === 'on' : true;
    var state = 'unavailable';
    if (online) {
      if (machine === 'run' || machine === 'pause') state = machine;
      else if (!powerOn) state = 'off';
      else state = job === 'finish' ? 'finished' : 'ready';
    }
    var running = state === 'run' || state === 'pause';
    var color = SW_STATE_COLORS[state] || 'var(--disabled-text-color, #9e9e9e)';
    var remoteOk = !ent.remote_control || this._val(ent.remote_control) === 'on';

    // Current cycle step, only while a cycle runs.
    var phase = '';
    if (running && this._avail(ent.job_state) && job !== 'none' && job !== 'finish') {
      var phaseKey = `job_${job}`;
      phase = this._t(phaseKey) === phaseKey ? swOptionLabel(lang, 'job_state', job) : this._t(phaseKey);
    }

    // Finish time (the entity keeps its last value once the cycle is over, so it only counts while running).
    var finish = running && this._avail(ent.completion_time) ? new Date(this._val(ent.completion_time)) : null;
    if (finish && Number.isNaN(finish.getTime())) finish = null;
    var timeLine = '';
    var pct = null;
    if (finish) {
      var remainingMs = Math.max(0, finish.getTime() - Date.now());
      var mins = Math.round(remainingMs / 60000);
      var h = Math.floor(mins / 60), m = mins % 60;
      var left = h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
      var at = finish.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
      timeLine = `${this._t('ends_at')} ${at} · ${this._t('remaining').replace('{t}', left)}`;
      var total = swCycleTotal(r.deviceId || ent.machine_state, true, remainingMs);
      if (total >= 60000) pct = Math.max(0, Math.min(100, Math.round((1 - remainingMs / total) * 100)));
    } else {
      swCycleTotal(r.deviceId || ent.machine_state, running, 0);
    }
    this._ticking = !!finish;

    var statusText = this._t(`st_${state}`);

    // Info chips.
    var chips = [];
    if (!online) chips.push(`<span class="chip"><ha-icon icon="mdi:cloud-off-outline"></ha-icon>${this._t('offline')}</span>`);
    if (online && ent.remote_control && !remoteOk && state !== 'off') {
      chips.push(`<span class="chip warn"><ha-icon icon="mdi:remote-off"></ha-icon>${this._t('remote_off')}</span>`);
    }
    if (c.show_chips && online) {
      if (ent.child_lock && this._val(ent.child_lock) === 'on') {
        chips.push(`<span class="chip"><ha-icon icon="mdi:lock-outline"></ha-icon>${this._t('child_lock')}</span>`);
      }
      var watts = Number(this._val(ent.power_w));
      if (running && this._avail(ent.power_w) && watts > 0) {
        chips.push(`<span class="chip"><ha-icon icon="mdi:flash-outline"></ha-icon>${Math.round(watts)} W</span>`);
      }
    }

    // Cycle options: spin, temperature, any other select, and switches such as Bubble Soak.
    var optionsHtml = '';
    if (c.show_options && online && powerOn && !running) {
      var selectIds = [ent.spin_level, ent.water_temperature].filter((id) => id && this._st(id)).map((id) => [id, id === ent.spin_level ? 'spin_level' : 'water_temperature'])
        .concat(ent.option_selects.filter((id) => this._st(id)).map((id) => [id, 'option']));
      var selects = selectIds.map((pair) => {
        var id = pair[0], role = pair[1], s = this._st(id), ok = this._avail(id) && remoteOk;
        var o = this._avail(id)
          ? swOptionsOf(s).map((v) =>
            `<option value="${swEsc(v)}"${v === s.state ? ' selected' : ''}>${swEsc(this._fmt(id, role, v))}</option>`).join('')
          : '<option selected>—</option>';
        return `<label class="field small"><span>${swEsc(this._entityLabel(id, deviceName))}</span><select data-select="${swEsc(id)}"${ok ? '' : ' disabled'}>${o}</select></label>`;
      }).join('');
      var toggles = ent.option_switches.filter((id) => this._st(id)).map((id) => {
        var ok = this._avail(id) && remoteOk, on = this._avail(id) && this._val(id) === 'on';
        return '<button class="toggle' + (on ? ' on' : '') + '" data-toggle="' + swEsc(id) + '"' + (ok ? '' : ' disabled') + '>' +
          '<ha-icon icon="' + (on ? 'mdi:checkbox-marked-circle' : 'mdi:checkbox-blank-circle-outline') + '"></ha-icon>' + swEsc(this._entityLabel(id, deviceName)) + '</button>';
      }).join('');
      if (selects || toggles) {
        optionsHtml = '<div class="section"><div class="section-title">' + this._t('options') + '</div>' +
          (selects ? `<div class="grid">${selects}</div>` : '') +
          (toggles ? `<div class="toggles">${toggles}</div>` : '') + '</div>';
      }
    }

    // Controls: the "control" select takes run / pause / stop.
    var controls = '';
    var ctrlOptions = swOptionsOf(this._st(ent.control));
    var ctrlOk = this._avail(ent.control);
    if (c.show_controls && online && powerOn && ent.control && ctrlOk) {
      var btns = [];
      if (!running && ctrlOptions.indexOf('run') >= 0) {
        var startAttr = remoteOk ? (this._starting ? ' disabled' : '') : ` disabled title="${swEsc(this._t('remote_off'))}"`;
        btns.push(`<button class="btn primary" data-action="start"${startAttr}><ha-icon icon="mdi:play"></ha-icon>${this._t(this._starting ? 'starting' : 'start')}</button>`);
      }
      if (state === 'run' && ctrlOptions.indexOf('pause') >= 0) {
        btns.push(`<button class="btn" data-action="pause"${remoteOk ? '' : ' disabled'}><ha-icon icon="mdi:pause"></ha-icon>${this._t('pause')}</button>`);
      }
      if (state === 'pause' && ctrlOptions.indexOf('run') >= 0) {
        btns.push(`<button class="btn primary" data-action="resume"${remoteOk ? '' : ' disabled'}><ha-icon icon="mdi:play"></ha-icon>${this._t('resume')}</button>`);
      }
      if (running && ctrlOptions.indexOf('stop') >= 0) {
        var confirming = this._confirming === 'stop';
        btns.push(`<button class="btn danger${confirming ? ' armed' : ''}" data-action="stop"${remoteOk ? '' : ' disabled'}><ha-icon icon="mdi:stop"></ha-icon>${this._t(confirming ? 'confirm' : 'stop')}</button>`);
      }
      if (btns.length) controls = `<div class="controls">${btns.join('')}</div>`;
      if (btns.length && !remoteOk) controls += `<div class="hint"><ha-icon icon="mdi:information-outline"></ha-icon>${this._t('remote_off_hint')}</div>`;
    }

    var errorHtml = this._error
      ? `<div class="error" role="alert" title="${swEsc(this._error.detail)}"><ha-icon icon="mdi:alert-circle-outline"></ha-icon><span>${swEsc(this._t(this._error.key))}</span></div>`
      : '';

    var subtitle = swEsc(statusText) + (phase ? ` · ${swEsc(phase)}` : '');

    var progressHtml = '';
    if (running || state === 'finished') {
      var shown = state === 'finished' ? 100 : pct;
      progressHtml = '<div class="progress">' +
        (shown == null ? '' : `<div class="bar"><div class="fill" style="width:${shown}%"></div></div>`) +
        '<div class="progress-info"><span class="pct">' + (shown == null ? '' : `${shown} %`) + '</span><span>' + swEsc(timeLine) + '</span></div></div>';
    }

    this.shadowRoot.innerHTML = this._styles(color) + '<ha-card>' +
      '<div class="header">' +
        '<div class="badge' + (state === 'run' ? ' running' : '') + '"><ha-icon icon="' + swEsc(icon) + '"></ha-icon></div>' +
        '<div class="titles"><div class="name"><span>' + swEsc(name) + '</span></div><div class="status">' + subtitle + '</div></div>' +
      '</div>' +
      (chips.length ? `<div class="chips">${chips.join('')}</div>` : '') +
      progressHtml + optionsHtml + errorHtml + controls +
    '</ha-card>';
  }

  _styles(color) {
    return '<style>' +
      ':host { display: block; height: 100%; --sw-color: ' + (color || 'var(--disabled-text-color, #9e9e9e)') + '; }' +
      'ha-card { height: 100%; box-sizing: border-box; padding: 12px; display: flex; flex-direction: column; gap: 10px; }' +
      '.empty { display: flex; align-items: center; gap: 10px; color: var(--secondary-text-color); }' +
      '.header { display: flex; align-items: center; gap: 10px; }' +
      '.badge { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;' +
        ' background: color-mix(in srgb, var(--sw-color) 15%, transparent); color: var(--sw-color); }' +
      '.badge ha-icon { --mdc-icon-size: 24px; }' +
      '.badge.running ha-icon { animation: sw-pulse 2s ease-in-out infinite; }' +
      '@keyframes sw-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.88); opacity: 0.7; } }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { display: flex; align-items: center; gap: 6px; font-size: 16px; font-weight: 500; line-height: 1.25; color: var(--primary-text-color); }' +
      '.name span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.status { font-size: 12px; color: var(--sw-color); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      'button { font: inherit; cursor: pointer; border: none; }' +
      'button:disabled { cursor: default; opacity: 0.5; }' +
      '.chips { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.chip { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 1px 8px 1px 5px; border-radius: 12px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.chip ha-icon { --mdc-icon-size: 13px; }' +
      '.chip.warn { background: color-mix(in srgb, var(--warning-color, #ffa600) 15%, transparent); color: var(--warning-color, #ffa600); }' +
      '.progress { display: flex; flex-direction: column; gap: 4px; }' +
      '.bar { height: 4px; border-radius: 3px; background: var(--secondary-background-color, rgba(128,128,128,0.15)); overflow: hidden; }' +
      '.fill { height: 100%; border-radius: 3px; background: var(--sw-color); transition: width 0.6s ease; }' +
      '.progress-info { display: flex; justify-content: space-between; gap: 8px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.pct { font-weight: 500; color: var(--primary-text-color); }' +
      '.field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }' +
      '.field > span { font-size: 11px; color: var(--secondary-text-color); }' +
      'select { font: inherit; font-size: 13px; color: var(--primary-text-color); padding: 6px 30px 6px 10px; border-radius: 10px; width: 100%;' +
        ' border: 1px solid var(--divider-color, rgba(128,128,128,0.25)); appearance: none; -webkit-appearance: none; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23888\' d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E") no-repeat right 8px center / 20px; }' +
      'select:disabled { opacity: 0.6; cursor: default; }' +
      '.field.small select { font-size: 13px; padding: 7px 28px 7px 10px; }' +
      '.section { display: flex; flex-direction: column; gap: 6px; }' +
      '.section-title { font-size: 12px; font-weight: 500; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.04em; }' +
      '.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 6px; }' +
      '.toggles { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.toggle { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px 3px 5px; border-radius: 12px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.toggle ha-icon { --mdc-icon-size: 16px; }' +
      '.toggle:disabled { opacity: 0.45; }' +
      '.toggle.on { background: color-mix(in srgb, var(--primary-color, #03a9f4) 15%, transparent); color: var(--primary-color, #03a9f4); }' +
      '.controls { display: flex; gap: 6px; }' +
      '.btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500;' +
        ' padding: 7px 10px; border-radius: 10px; background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--primary-text-color); }' +
      '.btn ha-icon { --mdc-icon-size: 18px; }' +
      '.btn.primary { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }' +
      '.btn.danger { background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent); color: var(--error-color, #db4437); }' +
      '.btn.danger.armed { background: var(--error-color, #db4437); color: #fff; }' +
      '.hint { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.hint ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }' +
      '.error { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--error-color, #db4437); }' +
      '.error ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }' +
    '</style>';
  }

  _onClick(ev) {
    var btn = ev.composedPath().find((n) => n.dataset && (n.dataset.action || n.dataset.toggle));
    if (!btn || btn.disabled) return;
    var hass = this._hass;
    if (btn.dataset.toggle) {
      hass.callService('switch', 'toggle', { entity_id: btn.dataset.toggle });
      return;
    }
    switch (btn.dataset.action) {
      case 'start':
        this._command('run', true);
        break;
      case 'pause':
        this._command('pause');
        break;
      case 'resume':
        this._command('run');
        break;
      case 'stop':
        if (this._confirming !== 'stop') {
          this._confirming = 'stop';
          clearTimeout(this._confirmTimer);
          this._confirmTimer = setTimeout(() => { this._confirming = null; this._update(); }, 3000);
        } else {
          this._confirming = null;
          clearTimeout(this._confirmTimer);
          this._command('stop');
        }
        this._update();
        break;
    }
  }

  _showError(key, err) {
    clearTimeout(this._errorTimer);
    this._error = { key: key, detail: swErrText(err), states: null };
    this._errorTimer = setTimeout(() => { this._clearError(); this._update(); }, SW_ERROR_TIMEOUT);
  }

  _clearError() {
    clearTimeout(this._errorTimer);
    this._error = null;
  }

  // Service call without Home Assistant's raw toast: the card shows its own message.
  _call(domain, service, data) {
    return this._hass.callService(domain, service, data, undefined, false);
  }

  // Retries once after a short delay when the cloud or the machine rejects the command for a moment.
  async _callRetry(domain, service, data) {
    try {
      return await this._call(domain, service, data);
    } catch (err) {
      if (!SW_RETRYABLE.test(swErrText(err))) throw err;
      await swDelay(SW_RETRY_DELAY);
      return this._call(domain, service, data);
    }
  }

  // Run / pause / stop all go through the same select entity.
  async _command(option, isStart) {
    var ent = this._r.ent;
    if (this._starting) return;
    if (isStart) {
      this._starting = true;
      this._clearError();
      this._update();
    }
    try {
      await this._callRetry('select', 'select_option', { entity_id: ent.control, option: option });
    } catch (err) {
      this._showError(isStart ? (SW_RETRYABLE.test(swErrText(err)) ? 'start_rejected' : 'start_failed') : 'command_failed', err);
    } finally {
      this._starting = false;
      this._update();
    }
  }

  _onChange(ev) {
    var el = ev.target;
    if (!el?.dataset?.select) return;
    this._hass.callService('select', 'select_option', { entity_id: el.dataset.select, option: el.value });
    el.blur();
  }
}

// ── smartthings-washer-card-editor (visual editor, built on HA's ha-form) ────
var SW_EDITOR_DEFAULTS = { show_controls: true, show_options: true, show_chips: true };

class SmartThingsWasherCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({}, config);
    this._render();
  }

  set hass(hass) {
    var prevLang = this._hass?.language;
    this._hass = hass;
    if (this._form && prevLang === (hass?.language)) {
      this._form.hass = hass;
    } else {
      this._render();
    }
  }

  _lang() {
    var lang = ((this._config?.language) || (this._hass?.language) || 'en').split('-')[0];
    return SwI18n[lang] ? lang : 'en';
  }

  _schema() {
    var t = (k) => swT(this._lang(), k);
    var domains = { machine_state: 'sensor', job_state: 'sensor', completion_time: 'sensor', control: 'select',
      remote_control: 'binary_sensor', child_lock: 'binary_sensor', power_state: 'binary_sensor', power_w: 'sensor',
      spin_level: 'select', water_temperature: 'select' };
    return [
      { name: 'device_id', selector: { device: { integration: SW_PLATFORM } } },
      {
        type: 'grid', name: '', schema: [
          { name: 'name', selector: { text: {} } },
          { name: 'icon', selector: { icon: {} } },
        ],
      },
      {
        type: 'grid', name: '', schema: [
          { name: 'show_controls', selector: { boolean: {} } },
          { name: 'show_options', selector: { boolean: {} } },
          { name: 'show_chips', selector: { boolean: {} } },
        ],
      },
      {
        name: 'language',
        selector: { select: { mode: 'dropdown', options: [{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }] } },
      },
      {
        type: 'expandable', name: 'entities', title: t('ed_entities'), flatten: false,
        schema: SW_OVERRIDABLE.map((r) => ({ name: r, selector: { entity: { domain: domains[r] } } })),
      },
    ];
  }

  _render() {
    if (!this._config || !this._hass) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.addEventListener('value-changed', (ev) => this._valueChanged(ev));
      this.appendChild(this._form);
    }
    var lang = this._lang();
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => {
      if (SW_ROLES[s.name]) return swT(lang, `en_${s.name}`);
      return swT(lang, `ed_${s.name}`);
    };
    this._form.computeHelper = (s) => {
      var key = `ed_${s.name}_helper`;
      var txt = swT(lang, key);
      return txt === key ? undefined : txt;
    };
    this._form.data = Object.assign({}, SW_EDITOR_DEFAULTS, this._config);
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    // Keep the YAML short: drop options left empty or at their default.
    Object.keys(value).forEach((key) => {
      if (value[key] === '' || value[key] === null || value[key] === undefined) delete value[key];
    });
    Object.keys(SW_EDITOR_DEFAULTS).forEach((key) => {
      if (value[key] === SW_EDITOR_DEFAULTS[key]) delete value[key];
    });
    if (value.entities) {
      var e = Object.assign({}, value.entities);
      Object.keys(e).forEach((k) => { if (!e[k]) delete e[k]; });
      if (Object.keys(e).length) value.entities = e; else delete value.entities;
    }
    if (this._config.type) value = Object.assign({ type: this._config.type }, value);
    var lang = this._lang();
    this._config = value;
    // A new language option relabels the form.
    if (lang !== this._lang()) this._render();
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: value }, bubbles: true, composed: true }));
  }
}

if (!customElements.get('smartthings-washer-card-editor')) {
  customElements.define('smartthings-washer-card-editor', SmartThingsWasherCardEditor);
}

window.customCards = window.customCards || [];
if (!customElements.get(SW_TYPE)) {
  customElements.define(SW_TYPE, SmartThingsWasherCard);
  window.customCards.push({
    type: SW_TYPE,
    name: 'SmartThings Washer Card',
    description: 'Washing machine card for the SmartThings integration (Samsung)',
    preview: true,
  });
}

console.info(`%c SMARTTHINGS-WASHER-CARD %c v${SMARTTHINGS_WASHER_CARD_VERSION} `, 'color:#fff;background:#1e88e5;font-weight:700', 'color:#1e88e5;background:#fff');
