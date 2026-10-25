# Changelog

## 0.1.0

First release: a fork of [ha-home-connect-card](https://github.com/juju35/ha-home-connect-card) (MIT) rewritten for Samsung washing machines on the Home Assistant **SmartThings** integration.

### Features
- One card, `smartthings-washer-card`, found from the device: status (running, paused, ready, finished, off), current cycle step (wash, rinse, spin…), finish time and time left.
- Estimated progress bar: SmartThings gives no percentage, so the longest remaining time seen since the cycle started is taken as the total.
- **Start**, **Pause**, **Resume** and **Stop** (with a confirmation tap) through the machine's run / pause / stop select. Disabled, with an explanation, while *Remote control* is off on the machine.
- Cycle options before starting: spin level, water temperature, and any other select or switch of the device (such as Bubble Soak).
- Chips for remote control off, child lock and live power draw.
- Visual editor, English and French, light and dark themes, entity overrides.

### Removed compared to the Home Connect card
- Program picker, door chip, salt / rinse aid alerts and the power button: SmartThings exposes none of them for this machine.
