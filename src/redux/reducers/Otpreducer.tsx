import axios from 'axios';
// action types
export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_FAILURE = 'VERIFY_OTP_FAILURE';

// action creator
export const verifyOtp = otp => {
  return async dispatch => {
    dispatch({type: VERIFY_OTP_REQUEST});
    try {
      const response = await axios.post(
        'http://11cf-180-151-121-182.ngrok.io/api/otplogin',
        {
          otp,
        },
      );
      dispatch({type: VERIFY_OTP_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: VERIFY_OTP_FAILURE, payload: error.message});
    }
  };
};

// reducer function
const initialState = {
  loading: false,
  error: null,
  data: null,
};

const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_OTP_REQUEST:
      return {...state, loading: true};
    case VERIFY_OTP_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case VERIFY_OTP_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default otpReducer;
