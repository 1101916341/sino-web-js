import * as types from '../action-type'
import { getUserInfoApi } from '@/api/user'
export const getUserInfo = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        getUserInfoApi()
            .then((response) => {
                const { data } = response;
                if (data.resultCode === "200") {
                    const userInfo = data.data;
                    dispatch(setUserInfo(userInfo));
                    resolve(data);
                } else {
                    const msg = data.message;
                    reject(msg);
                }
            }).catch((error) => {
                reject(error);
            });
    })
}

export const setUserToken = (userInfo) => {
    return {
        type: types.USER_SET_USER_TOKEN,
        userInfo,
    };
};

export const setUserInfo = (userInfo) => {
    return {
        type: types.USER_SET_USER_INFO,
        ...userInfo,
    };
};

export const resetUser = () => {
    return {
        type: types.USER_RESET_USER,
    };
};
