import { KEYPRESS, POWER, BANK, VOLUME, DISPLAY, PLAY } from '../constants';

const keypress = event => ({
  type: KEYPRESS,
  payload: event.keyCode,
});

const updatePower = () => ({
  type: POWER,
});

const updateBank = () => ({
  type: BANK,
});

const updateVolume = event => ({
  type: VOLUME,
  payload: event.target.value,
});

const updateDisplay = value => ({
  type: DISPLAY,
  payload: value,
});

const play = song => ({
  type: PLAY,
  song,
});

export { keypress, updatePower, updateBank, updateVolume, updateDisplay, play };
