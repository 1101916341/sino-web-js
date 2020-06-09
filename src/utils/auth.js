import Cookies from 'js-cookie'

const TokenKey = 'userInfo'

export function getToken () {
    return Cookies.get(TokenKey)
}

export function setToken (userInfo) {
    return Cookies.set(TokenKey, userInfo)
}

export function removeToken () {
    return Cookies.remove(TokenKey)
}
