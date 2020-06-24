import React from 'react'
import * as types from '../action-type'
import { getUserInfoApi, checkOldPwdApi, setUserPassowrdApi } from '@/api/user'
import { message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { logout } from './index'
export const getUserInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    getUserInfoApi()
      .then((response) => {
        if (response) {
          const { data } = response
          if (data.resultCode === '200') {
            // 获取用户信息
            const userInfo = data.data
            dispatch(setUserInfo(userInfo))
            resolve(data)
          } else {
            message.error('用户信息有误，请重新登陆')
            // const msg = '用户信息有误，请重新登陆'
            // reject(msg)
          }
        } else {
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 校验旧密码
export const checkOldPwd = (value) => (dispatch) => {
  return new Promise((resolve, reject) => {
    checkOldPwdApi({ oldPwd: value.oldPwd })
      .then((response) => {
        console.log(response)
        if (response) {
          const { data } = response
          // 校验密码是否正确
          if (data.data === '1') {
            Modal.confirm({
              icon: <ExclamationCircleOutlined />,
              title: '确定要提交吗?',
              okText: '确定',
              cancelText: '取消',
              onOk: () => {
                dispatch(setUserPassowrd(value))
              }
            })
            resolve(data.data)
          } else {
            message.error('原始密码不正确')
            // const msg = '原始密码不正确'
            // reject(msg)
          }
        } else {
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 修改密码
export const setUserPassowrd = (value) => (dispatch) => {
  return new Promise((resolve, reject) => {
    if (value.userToken !== value.oldPwd) {
      setUserPassowrdApi(value)
        .then((response) => {
          const { data } = response
          if (data.resultCode === '200') {
            message.success('修改成功').then(() => {
              dispatch(logout())
            })
            resolve(data)
          } else {
            message.error('接口异常，请重新操作!')
          }
        })
        .catch((error) => {
          reject(error)
        })
    } else {
      message.error('新密码不能与旧密码相同')
    }
  })
}

export const setUserToken = (userInfo) => {
  return {
    type: types.USER_SET_USER_TOKEN,
    userInfo
  }
}

export const setUserInfo = (userInfo) => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo
  }
}

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER
  }
}
