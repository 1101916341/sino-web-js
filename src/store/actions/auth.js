import { setUserToken, resetUser } from './user'
import { reqLoginApi, reqLogoutApi } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
export const login = (userAccount, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLoginApi({ userAccount: userAccount.trim(), password: password })
      .then((response) => {
        const { data } = response
        if (data.resultCode === '200') {
          // 用户名验证通过之后，需要添加一个是否登录的标识
          dispatch(setUserToken(userAccount))
          setToken(userAccount)
          resolve(data)
        } else {
          const msg = data.bizResultMessage
          reject(msg)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogoutApi()
      .then(() => {
        dispatch(resetUser())
        removeToken()
        window.location.href = '/'
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogoutApi()
      .then((response) => {
        const { data } = response
        if (data.resultCode === 200) {
          window.location.href = '/login'
          dispatch(resetUser())
          removeToken()
          resolve(data)
        } else {
          const msg = data.bizResultMessage
          reject(msg)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
} 
 */
