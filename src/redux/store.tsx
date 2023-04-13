import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ProductSlice from './slice/productSlice';
import thunk from 'redux-thunk';
import authReducer from './reducers/reducers';
import Reducers from './reducers/reducers';
import {AddressReducers} from './reducers/AddressReducers';
const RootReducers = combineReducers({
  // reducers
  AddressReducers,

  products: ProductSlice,
  auth: authReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
