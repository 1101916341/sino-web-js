import { setUserToken, resetUser } from "./user";
import { reqLoginApi, reqLogoutApi } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";
export const login = (userAccount, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        reqLoginApi({ userAccount: userAccount.trim(), password: password })
            .then((response) => {
                const { data } = response;
                if (data.resultCode === "200") {
                    dispatch(setUserToken(userAccount));
                    setToken(userAccount);
                    resolve(data);
                } else {
                    const msg = data.bizResultMessage;
                    reject(msg);
                }
            }).catch((error) => { reject(error) });
    })
}

export const logout = (token) => (dispatch) => {
    return new Promise((resolve, reject) => {
        reqLogoutApi(token)
            .then((response) => {
                const { data } = response;
                if (data.resultCode === 200) {
                    dispatch(resetUser());
                    removeToken();
                    resolve(data);
                } else {
                    const msg = data.bizResultMessage;
                    reject(msg);
                }
            }).catch((error) => {
                reject(error)
            });
    });
}
