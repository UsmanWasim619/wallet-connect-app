import { SetLoader } from './Loader.action';
import axios from 'axios';
import { enviroment } from '../../../environment/environment';
import { getData, setData } from '../../../services/StorageService';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
/**
 * this is action
 * */
export const SET_EMAIL = 'SET_EMAIL';
export const SET_USER = 'SET_USER';
export const SET_TRANSACTION = 'SET_TRANSACTION';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_PROVIDER = 'SET_PROVIDER';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_PROFILE_IMG = 'SET_PROFILE_IMG';
export const SET_SETTING = 'SET_SETTING';
export const SET_CARD = 'SET_CARD';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const SET_NET_INFO = 'SET_NET_INFO';
export const SET_LANGUAGE = 'SET_LANGUAGE';



export const SetEmailAction = data => ({
  type: SET_EMAIL,
  payload: data?.email,
});

export const SetUserAction = data => ({
  type: SET_USER,
  payload: data,
});

export const SetTransactionAction = data => ({
  type: SET_TRANSACTION,
  payload: data,
});

export const SetToken = data => ({
  type: SET_TOKEN,
  payload: data,
});

export const SetProviderAction = data => ({
  type: SET_PROVIDER,
  payload: data,
});

export const SetLogout = data => ({
  type: SET_LOGOUT,
  payload: data,
});

export const SetProfileImg = data => ({
  type: SET_PROFILE_IMG,
  payload: data,
});

export const SetSetting = data => ({
  type: SET_SETTING,
  payload: data,
});

export const SetCardAction = data => ({
  type: SET_CARD,
  payload: data,
});

export const SetIsLoggedIn = data => ({
  type: SET_IS_LOGGED_IN,
  payload: data,
});

export const SetNetInfo = data => ({
  type: SET_NET_INFO,
  payload: data,
});

export const SetLanguage = data => ({
  type: SET_LANGUAGE,
  payload: data,
});

export const getUser = () => {
  return async dispatch => {
    try {
      const response = await axiosInstance.get(`me`);

      dispatch(SetCardAction(response.data?.card));
      return dispatch(SetUserAction(response.data?.user));
    } catch (error) {
      return error?.response?.data;
    }
  };
};

export const sendOtpAPI = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axios.post(
        `${enviroment.apiUrl}user/send-otp`,
        payload,
      );
      dispatch(SetLoader('loader', false));

      return dispatch(SetEmailAction(response.data));
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const getAllTransactionApiReq = (limit = '') => {
  return async dispatch => {
    try {
      const response = await axiosInstance.get(
        `${enviroment.apiUrl}transaction/getAll?limit=${limit}`,
      );

      return dispatch(SetTransactionAction(response.data));
    } catch (error) {
      return error?.response?.data;
    }
  };
};

export const resetPasswordAPI = async payload => {
  try {
    return await axios.post(`${enviroment.apiUrl}user/reset-password`, payload);
  } catch (error) {
    return error?.response;
  }
};

export const connectWalletAPI = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `${enviroment.apiUrl}providers/connect`,
        payload,
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const getAllProvidersAPI = () => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));
      const response = await axiosInstance.get(
        `${enviroment.apiUrl}providers/getAll`,
      );
      dispatch(SetLoader('loader', false));
      return response?.data?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const loginWithProviderApi = (provider, payload) => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/loginWith/${provider}`,
        payload,
      );

      if (response?.data?.token) {
        await setData('token', response?.data?.token);
        dispatch(SetToken(response?.data?.token));
      }

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const profileNameUpdateApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/profileNameUpdate`,
        payload,
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const sendOtpEmailAnMobNoApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/sendOtpEmailAnMobNo`,
        payload,
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const verifyOtpEmailAnMobNoApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/verifyOtpEmailAnMobNo`,
        payload,
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const profileImgUpdateApi = fromData => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axios.post(
        `${enviroment.apiUrl}user/updateProfile`,
        fromData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: await getData('token'),
          },
        },
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const changePasswordProfileApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(`user/changePassword`, payload);

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const settingApi = () => {
  return async dispatch => {
    try {
      const response = await axiosInstance.get(`user/setting`);

      return dispatch(SetSetting(response?.data));
    } catch (error) {
      return error?.response?.data;
    }
  };
};

export const loginWithWalletConnectApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/loginWalletConnect`,
        payload,
      );

      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const signUpWithWalletConnectApi = payload => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.post(
        `user/signUpWalletConnect`,
        payload,
      );

      if (response?.data?.token) {
        await setData('token', response?.data?.token);
        dispatch(SetToken(response?.data?.token));
      }
      dispatch(SetLoader('loader', false));
      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const createPinCodeApi = (userId, payload) => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.patch(`c/users/${userId}`, payload);

      dispatch(SetLoader('loader', false));

      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};

export const getCountriesApi = () => {
  return async dispatch => {
    try {
      dispatch(SetLoader('loader', true));

      const response = await axiosInstance.get(`user/getCountries`);

      dispatch(SetLoader('loader', false));

      return response?.data;
    } catch (error) {
      dispatch(SetLoader('loader', false));
      return error?.response?.data;
    }
  };
};
