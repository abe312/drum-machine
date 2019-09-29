import { KEYPRESS } from '../constants/';

function handleKeyPress(e) {
  if (e.keyCode === this.props.keyCode) {
    this.playSound();
  }
}
function playSound(e) {
  const sound = document.getElementById(this.props.keyTrigger);
  sound.currentTime = 0;
  sound.play();
  this.activatePad();
  setTimeout(() => this.activatePad(), 100);
  this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
}
const keypressReducer = (state = {}, action) => {
  if (action.type === KEYPRESS) {
    switch (action.payload) {
      case 81:
        return KEYPRESS.Q;
      case 87:
        return KEYPRESS.W;
      case 69:
        return KEYPRESS.E;
      case 65:
        return KEYPRESS.A;
      case 83:
        return KEYPRESS.S;
      case 68:
        return KEYPRESS.D;
      case 90:
        return KEYPRESS.Z;
      case 88:
        return KEYPRESS.X;
      case 67:
        return KEYPRESS.C;
      default:
        return { error: 'invalid keypress' };
    }
  } else return {};
};

export default keypressReducer;
