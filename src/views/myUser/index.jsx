import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Descriptions } from 'antd'
import { deleteTag } from '@/store/actions'
import './myUser.less'
const MyUser = (props) => {
  const {
    userAccount,
    userName,
    genderDesc,
    birthday,
    telephone,
    email,
    certificatesType,
    certificatesCode,
    jobNumber,
    bankCard,
    weight,
    roles,
    orgName
  } = props.user
  let role = []
  roles.map((res) => (role = role.concat(res.roleName)))
  role = role.toString()
  // 关闭
  const handleClose = () => {
    const { taglist } = props.tagsView
    const { history, deleteTag } = props
    const tag = taglist.filter(item => item.path === '/myUser')
    const path = tag[0].path
    const currentPath = history.location.pathname
    const length = taglist.length
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      history.push(taglist[length - 1].path)
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (path === taglist[length - 1].path && currentPath === taglist[length - 1].path) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        history.push(taglist[length - 2].path)
      } else if (length === 2) {
        history.push(taglist[0].path)
      }
    }
    deleteTag(tag[0])
  }
  return (
    <Card className='card' title='个人信息'>
      <Descriptions column={2}>
        <Descriptions.Item label='账号'>{userAccount}</Descriptions.Item>
        <Descriptions.Item label='用户名'>{userName}</Descriptions.Item>
        <Descriptions.Item label='性别'>{genderDesc}</Descriptions.Item>
        <Descriptions.Item label='生日'>{birthday}</Descriptions.Item>
        <Descriptions.Item label='电话'>{telephone}</Descriptions.Item>
        <Descriptions.Item label='邮箱'>{email}</Descriptions.Item>
        <Descriptions.Item label='证件类型'>{certificatesType}</Descriptions.Item>
        <Descriptions.Item label='证件号码'>{certificatesCode}</Descriptions.Item>
        <Descriptions.Item label='工号'>{jobNumber}</Descriptions.Item>
        <Descriptions.Item label='工资卡'>{bankCard}</Descriptions.Item>
        <Descriptions.Item label='用户销售等级加权'>{weight}</Descriptions.Item>
        <Descriptions.Item label='角色'>{role}</Descriptions.Item>
        <Descriptions.Item label='机构'>{orgName}</Descriptions.Item>
      </Descriptions>
      <div className='userBtn'>
        <Button type='default' onClick={handleClose}>
          关闭
        </Button>
      </div>
    </Card>
  )
}
export default connect((state) => state, { deleteTag })(MyUser)
