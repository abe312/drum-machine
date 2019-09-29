import { PLAY } from '../constants';

const playSoundReducer = (state = null, action) => {
  switch (action.type) {
    case PLAY:
      return action.song;
    default:
      return state;
  }
};

export default playSoundReducer;
