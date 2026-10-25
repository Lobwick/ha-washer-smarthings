# ha-washer-smarthings

A custom Lovelace card for **Samsung washing machines** connected through Home Assistant's [SmartThings](https://www.home-assistant.io/integrations/smartthings/) integration.

Pick the appliance, the card finds all its entities by itself.

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Lobwick&repository=ha-washer-smarthings&category=plugin)

This is a fork of [ha-home-connect-card](https://github.com/juju35/ha-home-connect-card) by juju35 (MIT), adapted to the entities SmartThings exposes. The structure, visual editor and look come from the original.

## Features

- Status with colour: running, paused, ready, finished, off
- Current cycle step (pre-wash, wash, rinse, spin…), finish time and time left
- Estimated progress bar (SmartThings gives no percentage, see below)
- **Start**, **Pause**, **Resume** and **Stop** (confirmation tap), when *Remote control* is on
- Cycle options before starting: spin level, water temperature, and any other select or switch of the device (Bubble Soak…)
- Chips for remote control off, child lock and live power draw
- Visual editor in the dashboard UI (no YAML needed)
- English and French, follows the Home Assistant language
- Light and dark theme compatible
- Single file, no dependencies, HACS-ready

## Prerequisites

- Home Assistant 2024.8 or later with the [SmartThings](https://www.home-assistant.io/integrations/smartthings/) integration set up and the washer added
- To start, pause or stop a cycle from Home Assistant, **Remote control** must be enabled on the machine itself (the card shows a hint when it isn't). Without it the card is read-only.

## Installation

### Via HACS (recommended)

Click the button below to add the repository directly:

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Lobwick&repository=ha-washer-smarthings&category=plugin)

Or manually:

1. Open HACS → **Frontend** → **⋮** → **Custom repositories**
2. Add `https://github.com/Lobwick/ha-washer-smarthings` — Category: **Dashboard** (Lovelace)
3. Search for **SmartThings Washer Card** and install it
4. Clear your browser cache and refresh

HACS registers the dashboard resource for you.

### Manual

1. Download `smartthings-washer-card.js` from the [latest release](https://github.com/Lobwick/ha-washer-smarthings/releases/latest)
2. Copy it to `/config/www/smartthings-washer-card.js`
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/smartthings-washer-card.js`
   - Type: **JavaScript Module**
4. Clear your browser cache and refresh

## Configuration

### Visual editor

Add the card from the dashboard (**Add card** → **SmartThings Washer Card**). The first washer found is picked automatically; change it with the **Appliance** field, then set the name, icon and the sections to show. The **Entities (advanced)** panel lets you force any entity if auto-detection picks the wrong one.

### Minimal

```yaml
type: custom:smartthings-washer-card
device_id: 62d14366f61e198f202a26fa5b59b309
```

```yaml
type: custom:smartthings-washer-card
entity: sensor.lave_linge_machine_state
```

Use either `device_id` (what the visual editor writes) or `entity` (any entity of the appliance). With neither, the card uses the first SmartThings washer it finds.

### Full options

```yaml
type: custom:smartthings-washer-card
device_id: 62d14366f61e198f202a26fa5b59b309
name: Lave-linge
icon: mdi:washing-machine
show_controls: true
show_options: true
show_chips: true
language: fr
entities:
  machine_state: sensor.lave_linge_machine_state
  control: select.lave_linge
  completion_time: sensor.lave_linge_completion_time
```

### Options reference

| Option          | Required | Default                | Description                                                                |
| --------------- | -------- | ---------------------- | -------------------------------------------------------------------------- |
| `device_id`     | no\*     | Auto                   | SmartThings device (\*or `entity`; the first washer found is used if both are missing) |
| `entity`        | no       | none                   | Any entity of the appliance, used to find the device                       |
| `name`          | no       | Device name            | Card title                                                                 |
| `icon`          | no       | `mdi:washing-machine`  | Card icon                                                                  |
| `show_controls` | no       | `true`                 | Show Start / Pause / Resume / Stop buttons                                 |
| `show_options`  | no       | `true`                 | Show cycle options (only while no cycle runs)                              |
| `show_chips`    | no       | `true`                 | Show child lock and power draw chips                                       |
| `language`      | no       | Auto                   | Force language: `fr` or `en`                                               |
| `entities`      | no       | Auto                   | Override detected entities (see below)                                     |

### Entity overrides

| Key                 | Domain          | Used for                                          |
| ------------------- | --------------- | ------------------------------------------------- |
| `machine_state`     | `sensor`        | Status (run / pause / stop)                       |
| `job_state`         | `sensor`        | Cycle step (wash, rinse, spin…)                   |
| `completion_time`   | `sensor`        | Finish time and time left                         |
| `control`           | `select`        | Start / pause / resume / stop (run, pause, stop)  |
| `remote_control`    | `binary_sensor` | Enables the buttons and options                   |
| `child_lock`        | `binary_sensor` | Child lock chip                                   |
| `power_state`       | `binary_sensor` | Powered on or off                                 |
| `power_w`           | `sensor`        | Live power draw chip                              |
| `spin_level`        | `select`        | Spin option                                       |
| `water_temperature` | `select`        | Temperature option                                |

Every other `switch` and `select` of the device is shown as a cycle option.

## How it works

The card reads the entity registry to list the entities of the chosen device, then matches each role by its translation key, then by its entity ID (English and French slugs), then by its attributes. A device counts as a washer when it has a select taking `run` / `pause` / `stop` and a sensor with the wash cycle steps.

SmartThings only reports `run`, `pause` or `stop`: the card shows *Finished* when the machine is stopped and the cycle step is `finish`, and *Off* when the power sensor is off.

There is no progress percentage in SmartThings. The card takes the longest remaining time it has seen since the cycle started as the total and shows how much of it has elapsed. It remembers that value in the browser, so a reload mid-cycle keeps the bar. If the page was closed when the cycle started, the first value seen is used, so the bar can start above 0 %.

Start, pause, resume and stop all select `run`, `pause` or `stop` on the machine's control select.

## Development

```
npm run build   # stamps the version of package.json into dist/smartthings-washer-card.js
npm run check   # builds and checks the card (run in CI)
npm test        # unit tests, with entities modelled on a real DA_WM_TP1_21_COMMON washer
```

`dist/` is not committed: `npm run build` creates it locally, CI builds it on every push, and the release workflow attaches the built file to the release, which is where HACS downloads it from.

## License

[MIT](LICENSE). Original work © juju35, modifications © Felix.
