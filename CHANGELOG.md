# Changelog

## Unreleased

### What's new
- Home Connect logo next to the appliance name.

## 1.1.0

### Fixes
- Program options (intensive zone, brilliance dry, speed perfect, hygiene plus…) no longer disappear when Home Connect hasn't loaded them: they stay visible, greyed out, until they're available.

### What's new
- **Load options** button when no option is loaded yet, for example after a Home Assistant restart. It switches to another program and back, which makes Home Connect send the options.
- New README screenshot of the dishwasher with its program options.

## 1.0.0

First public release.

### What's new
- Two cards for the Home Connect integration: `home-connect-dishwasher-card` and `home-connect-washer-card`.
- Pick the appliance once: every entity (state, door, progress, finish time, programs, power, stop/pause/resume, alerts) is found automatically from the device, and any of them can be overridden.
- Status with color, progress bar, finish time and time left while a program runs.
- Program picker and Start button (when remote start is enabled on the appliance), Pause/Resume for washers, Stop with a confirmation tap.
- Program options before starting: temperature, spin speed, Vario Perfect, intensive zone, hygiene and so on, whatever the appliance exposes.
- Door state, salt and rinse aid alerts.
- Visual editor in the dashboard UI, labels in English and French.
- Light and dark theme compatible, installable via HACS.
