import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import Routes from './routes'
import './style/index.less'
const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ConfigProvider>
  )
}

export default App;
