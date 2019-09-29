import bankReducer from './bankReducer';
import powerReducer from './powerReducer';
import keypressReducer from './keypressReducer';
import volumeReducer from './volumeReducer';
import displayReducer from './displayReducer';
import playSoundReducer from './playSoundReducer';
import { data1, data2 } from './dataReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  bank: bankReducer,
  power: powerReducer,
  keypress: keypressReducer,
  volume: volumeReducer,
  data1,
  data2,
  display: displayReducer,
  play: playSoundReducer,
});

export default rootReducer;
