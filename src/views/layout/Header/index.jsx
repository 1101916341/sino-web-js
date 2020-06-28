import React from 'react'
import { Layout, Menu, Dropdown, Avatar, Modal } from 'antd'
import Hamburger from '@/components/Hamburger'
import { connect } from 'react-redux'
import { logout, getUserInfo, addTag } from '@/store/actions'
import { UserOutlined, SettingOutlined, LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import profile from '@/assets/images/users/profile.png'
import { menuList } from '@/config/menuConfig'
import { getMenuItemInMenuListByProperty } from '@/utils'
import { Link, withRouter } from 'react-router-dom'
import './header.less'

const { Header } = Layout

const LayoutHeader = (props) => {
  const { userName, userAccount, avatar, logout, addTag } = props
  const handleLogout = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      title: '注销',
      content: '确定要退出系统吗?',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        logout()
      }
    })
  }
  const onClick = ({ key }) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, 'path', key)
    switch (key) {
      case '/myUser':
        addTag(menuItem)
        break
      case '/editPassowrd':
        addTag(menuItem)
        break
      case 'logout':
        handleLogout()
        break
      default:
        break
    }
  }
  const menu = (
    <Menu onClick={onClick}>
      <div className='user-info'>
        <div className='user-image'>
          {avatar ? (
            <Avatar shape='square' size={48} src={avatar} />
          ) : (
            <Avatar shape='square' size={48} src={profile} />
          )}
        </div>
        <div className='user-text'>
          <span>{userName}</span>
          <span>{userAccount}</span>
        </div>
      </div>
      <Menu.Divider />
      <Menu.Item key='/myUser' title='个人信息' icon={<UserOutlined />}>
        <Link to='/myUser'>个人信息</Link>
      </Menu.Item>
      <Menu.Item key='/editPassowrd' title='修改密码' icon={<SettingOutlined />}>
        <Link to='/editPassowrd'>修改密码</Link>
      </Menu.Item>
      <Menu.Item key='logout' title='退出' icon={<LogoutOutlined />}>
        退出
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
        则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      <Header>
        <Hamburger />
        <div className='right-menu'>
          <div className='dropdown-wrap'>
            <Dropdown overlay={menu} placement='bottomRight' trigger={['click']}>
              <div>
                {avatar ? (
                  <Avatar shape='square' size={48} src={avatar} />
                ) : (
                  <Avatar shape='square' size={48} src={profile} />
                )}
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  )
}

export default connect((state) => state.user, { logout, getUserInfo, addTag })(withRouter(LayoutHeader))
