import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ProductSlice from '../slice/productSlice';
import thunk from 'redux-thunk';
import Reducers from '../reducers/reducers';
import {configureStore} from '@reduxjs/toolkit/dist/configureStore';
import authReducer from '../reducers/reducers';
import {AddressReducers} from '../reducers/AddressReducers';
const RootReducers = combineReducers({
  // reducers
  AddressReducers,
  Reducers,
  products: ProductSlice,
  auth: authReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
