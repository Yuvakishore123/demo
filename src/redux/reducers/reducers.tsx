// interface AuthState {
//   authToken: string | null;
// }
<<<<<<< HEAD

// const initialState: AuthState = {
//   authToken: null,
// };

// type AuthAction = {type: 'LOGIN'; payload: string} | {type: 'LOGOUT'};

=======
// const initialState: AuthState = {
//   authToken: null,
// };
// type AuthAction = {type: 'LOGIN'; payload: string} | {type: 'LOGOUT'};
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
// const authReducer = (state = initialState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         authToken: action.payload,
//       };
//     case 'LOGOUT':
//       return {
//         authToken: null,
//       };
//     default:
//       return state;
//   }
// };
<<<<<<< HEAD

=======
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
// export default authReducer;
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actions';
const initialState = {
  authToken: null,
  loading: false,
  isAuthenticated: false,
  error: '',
};
<<<<<<< HEAD

=======
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        authToken: action.payload,
        isAuthenticated: true,
        error: '',
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        authToken: null,
      };
    default:
      return state;
  }
};
<<<<<<< HEAD

export default authReducer;
=======
export default authReducer;
>>>>>>> 872683b970244501c55e2cc37ee28b45a49a9520
