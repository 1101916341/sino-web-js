import request from '@/utils/request'
const api = {
  getUserInfo: '/app/admin/user/getUserAll', // token 信息
  getUser: '/app/admin/user/detail', // 个人信息
}
export function getUserInfoApi() {
  return request({
    url: api.getUserInfo,
    method: 'get',
  })
}