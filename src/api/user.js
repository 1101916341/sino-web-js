import request from '@/utils/request'
const api = {
  getUserInfo: '/app/admin/user/getUserAll', // token 信息
  getUser: '/app/admin/user/detail', // 个人信息
  setUserPassowrd: '/app/admin/user/changePswd', // 修改密码
  checkOldPwd: '/app/admin/user/checkOldPwd', // 校验旧密码
}
// 当前登录人信息
export function getUserInfoApi() {
  return request({
    url: api.getUserInfo,
    method: 'get',
  })
}
// 修改密码
export function setUserPassowrdApi(data) {
  return request({
    url: api.setUserPassowrd,
    method: 'post',
    data
  })
}
// 校验旧密码
export function checkOldPwdApi(data) {
  return request({
    url: api.checkOldPwd,
    method: 'post',
    data
  })
}