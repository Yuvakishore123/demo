import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import ProductSlice from '../slice/productSlice';
import thunk from 'redux-thunk';
<<<<<<< HEAD:src/redux/store/index.tsx
import Reducers from '../reducers/reducers';
=======
import authReducer from './reducers/reducers';
import Reducers from './reducers/reducers';
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520:src/redux/store.tsx
const RootReducers = combineReducers({
  // reducers
  Reducers,
  products: ProductSlice,
  auth: authReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));

