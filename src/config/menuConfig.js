const menuList = [
  {
    title: '首页',
    path: '/dashboard',
    roles: [],
    icon: 'HomeOutlined',
    children: [
      {
        path: '/dashboard/123',
        title: '首页',
        roles: [],
        icon: 'HomeOutlined'
      }
    ]
  },
  {
    path: '/analysis',
    title: '经营分析',
    roles: [],
    icon: 'AreaChartOutlined',
    children: []
  },
  {
    path: '/culture',
    title: '企业文化',
    roles: [],
    icon: 'BookOutlined',
    children: []
  },
  {
    path: '/business',
    title: '业务管理',
    roles: [],
    icon: 'GoldOutlined',
    children: []
  },
  {
    path: '/process',
    title: '流程管理',
    roles: [],
    icon: 'ClusterOutlined',
    children: []
  },
  {
    path: '/credit',
    title: '信用管理',
    roles: [],
    icon: 'IdcardOutlined',
    children: []
  },
  {
    path: '/configuration',
    title: '配置管理',
    roles: [],
    icon: 'SettingOutlined',
    children: []
  },
  {
    path: '/system',
    title: '系统管理',
    roles: [],
    icon: 'SettingOutlined',
    children: []
  },
  {
    path: '/myUser',
    title: '个人信息',
    isShow: false
  },
  {
    path: '/editPassowrd',
    title: '修改密码',
    isShow: false
  }
]

export {menuList}
