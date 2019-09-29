import { BANK } from '../constants';
const bankReducer = (state = false, action) => {
  switch (action.type) {
    case BANK:
      return !state;
    default:
      return state;
  }
};

export default bankReducer;
