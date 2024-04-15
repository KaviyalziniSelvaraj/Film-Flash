// rootReducer.js
import { combineReducers } from 'redux';
import btntypeReducer from './Seatreducer';
import loginReducer from './Loginreducer';

const rootReducer = combineReducers({
    seat:btntypeReducer,
    login:loginReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
