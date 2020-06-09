import request from '@/utils/request'
const api = {
    login: '/admin/login/ajax',
    logout: '/logout?clientType=pc',
}
export function reqLoginApi (data) {
    return request({
        url: api.login,
        method: 'get',
        params: data
    })
}
export function reqLogoutApi (data) {
    return request({
        url: api.logout,
        method: 'get',
        data
    })
}
