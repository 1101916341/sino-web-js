const menuList = [
  {
    title: '首页',
    path: '/dashboard',
    roles: [],
    icon: 'HomeOutlined',
    children: [
      {
        path: '/bizsupplierinfo',
        title: '供应商库',
        roles: [],
        icon: 'GroupOutlined'
      },
      {
        path: '/flowform',
        title: '暂存提交',
        roles: [],
        icon: 'SaveOutlined'
      },
      {
        path: '/projpcontractreview/listReviewAndPurchse',
        title: '案例库',
        roles: [],
        icon: 'UngroupOutlined'
      },
      {
        path: '/bizcustinfo',
        title: '客户库',
        roles: [],
        icon: 'UserSwitchOutlined'
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
