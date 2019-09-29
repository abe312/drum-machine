import { DISPLAY } from '../constants';
const displayReducer = (state = 'Display', action) => {
  switch (action.type) {
    case DISPLAY:
      return action.payload;
    default:
      return state;
  }
};

export default displayReducer;
