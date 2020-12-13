import { combineReducers } from 'redux';

import sources from '../modules/sources';
import plans from '../modules/plans';

export default combineReducers({
    sources,
    plans
});