import { VOLUME } from '../constants';

const volumeReducer = (state = 10, action) => {
  switch (action.type) {
    case VOLUME:
      return action.payload;
    default:
      return state;
  }
};
export default volumeReducer;
