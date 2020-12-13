import { combineReducers } from 'redux';

import sources from '../modules/sources';
import plans from '../modules/plans';
import destinys from '../modules/destinys';

export default combineReducers({
    sources,
    plans,
    destinys
});