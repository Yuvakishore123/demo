interface AuthState {
  authToken: string | null;
}

const initialState: AuthState = {
  authToken: null,
};

type AuthAction = {type: 'LOGIN'; payload: string} | {type: 'LOGOUT'};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authToken: action.payload,
      };
    case 'LOGOUT':
      return {
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
