import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTag } from '@/store/actions'
import { getMenuItemInMenuListByProperty } from '@/utils'
import { menuList } from '@/config/menuConfig'
import * as Icon from '@ant-design/icons' // 图标动态引入
import './menu.less'
const SubMenu = Menu.SubMenu

class Meun extends Component {
  state = {
    menuTreeNode: null,
    openKey: []
  }
  // filterMenuItem用来根据配置信息筛选可以显示的菜单项
  filterMenuItem = (item) => {
    const { roles } = item
    const { role } = this.props
    if (role !== 'admin' || !roles || roles.includes(role)) {
      return true
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      return !!item.children.find((child) => roles.includes(child.role))
    }
    return false
  }
  // 菜单渲染
  getMenuNodes = (menuList) => {
    menuList = menuList.filter((menu) => menu.isShow !== false)
    // 得到当前请求的路由路径
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      let icons = Icon[item.icon]
      if (this.filterMenuItem(item)) {
        if (!item.children) {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {React.createElement(icons, {
                  className: 'icon'
                })}
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find((cItem) => path.indexOf(cItem.path) === 0)
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            this.setState((state) => ({
              openKey: [...state.openKey, item.path]
            }))
          }
          // 向pre添加<SubMenu>
          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  {React.createElement(icons, {
                    className: 'icon'
                  })}
                  <span>{item.title}</span>
                </span>
              }>
              {this.getMenuNodes(item.children)}
            </SubMenu>
          )
        }
      }
      return pre
    }, [])
  }

  handleMenuSelect = ({ key = '/dashboard' }) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, 'path', key)
    this.props.addTag(menuItem)
  }

  componentWillMount() {
    const menuTreeNode = this.getMenuNodes(menuList)
    this.setState({
      menuTreeNode
    })
    this.handleMenuSelect(this.state.openKey)
  }
  render() {
    const path = this.props.location.pathname
    const openKey = this.state.openKey
    return (
      <div>
        {this.state.menuTreeNode.map((item, index) => (
          <div key={item.key} index={index}>
            <Menu
              mode='inline'
              theme='dark'
              onSelect={this.handleMenuSelect}
              selectedKeys={[path]}
              defaultOpenKeys={openKey}>
              {item}
            </Menu>
          </div>
        ))}
      </div>
    )
  }
}

export default connect((state) => state, { addTag })(withRouter(Meun))
