import * as types from '../action-type'
import { getToken } from '@/utils/auth'

const initUserInfo = {
  userAccount: '', // 账号
  roles: '', // 角色
  avatar: '', // 头像
  serialNo: '',
  telephone: '', // 电话
  userName: '', // 用户名
  userToken: '', // 用户Token
  weight: '',
  bankCard: '',
  orgId: '',
  orgList: '', // 部门.
  birthday: null,
  certificatesCode: '',
  certificatesType: null,
  certificatesTypeName: '',
  deleted: '',
  email: '',
  gender: '',
  genderDesc: '',
  id: '',
  invalid: '',
  jobNumber: '',
  token: getToken()
}

export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.userInfo
      }
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        userAccount: action.userAccount,
        userName: action.userName,
        roles: action.roles,
        avatar: action.avatar,
        serialNo: action.serialNo,
        telephone: action.telephone,
        userToken: action.userToken,
        weight: action.weight,
        bankCard: action.bankCard,
        orgId: action.orgId,
        orgList: action.orgList,
        birthday: action.birthday,
        certificatesCode: action.certificatesCode,
        certificatesType: action.certificatesType,
        certificatesTypeName: action.certificatesTypeName,
        deleted: action.deleted,
        email: action.email,
        gender: action.gender,
        genderDesc: action.genderDesc,
        id: action.id,
        invalid: action.invalid,
        jobNumber: action.jobNumber
      }
    case types.USER_RESET_USER:
      return {}
    default:
      return state
  }
}
