// reducers/postReducer.js

import {
  SET_CARD,
  SET_EMAIL,
  SET_IS_LOGGED_IN,
  SET_LANGUAGE,
  SET_LOGOUT,
  SET_NET_INFO,
  SET_PROFILE_IMG,
  SET_PROVIDER,
  SET_SETTING,
  SET_TOKEN,
  SET_TRANSACTION,
  SET_USER,
} from '../action/Auth.action';

export const initialState = {
  email: '',
  user: null,
  transactions: [],
  token: null,
  providers: [],
  isLoggingIn: false,
  setting: null,
  card: null,
  isNetConnected: false,
  language: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NET_INFO:
      return {
        ...state,
        isNetConnected: action.payload,
      };

    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggingIn: action.payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action?.payload || state?.email,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        languagerun: action?.payload,
      };
    case SET_SETTING:
      return {
        ...state,
        setting: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_CARD:
      return {
        ...state,
        card: action.payload,
      };

    case SET_PROFILE_IMG: {
      let user = state.user;
      user.userProfile = action.payload;
      return {
        ...state,

        user,
      };
    }

    case SET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload.data,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case SET_PROVIDER:
      return {
        ...state,
        providers: action.payload.data,
      };
    case SET_LOGOUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default AuthReducer;
