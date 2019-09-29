import { POWER } from '../constants';

const powerReducer = (state = true, action) => {
  switch (action.type) {
    case POWER:
      // if (state === false) return true;
      // return false;

      return !state;
    default:
      return state;
  }
};

export default powerReducer;
