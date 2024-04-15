
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Rootreducer';

const store = configureStore({
    reducer: rootReducer,
});
export default store;


