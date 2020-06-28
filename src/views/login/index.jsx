import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { Redirect } from "react-router-dom";
import {
    UserOutlined,
    LockOutlined,
    UsergroupAddOutlined,
    HomeOutlined,
    MobileOutlined,
    YoutubeOutlined
} from '@ant-design/icons';
import DocumentTitle from "react-document-title";
import logo from '@/assets/images/logo.png'
import anniversary from '@/assets/images/loginImage/anniversary.png'
import official from '@/assets/images/loginImage/official.png'
import LoginMenu from './LoginMenu'
import LoginModal from './LoginModal'
import { login } from "@/store/actions";
import './login.less'
import { connect } from 'react-redux';

const Login = (props) => {
    const { token, login } = props;
    const handleLogin = (userAccount, password) => {
        login(userAccount, password)
            .then(data => {
                message.success(data.bizResultMessage);
                // handleUserInfo();
            }).catch((error) => {
                message.error(error);
            });
    }
    const onFinish = values => {
        const { userAccount, password } = values;
        handleLogin(userAccount, password);
    };
    if (token) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <DocumentTitle title={"用户登录"}>
            <div className="login">
                <div>
                    <div className="login-header">
                        <img
                            src={logo}
                            alt="中科金财"
                            className="log-style"
                        />
                        <div className="sino-ul">
                            <a rel='noopener noreferrer' target='_blank' href="http://www.sinodata.net.cn/"><HomeOutlined /> 公司官网</a>
                            <a rel='noopener noreferrer' target='_blank' href="http://ehr.sinodata.net.cn"><UsergroupAddOutlined /> ERH员工系统</a>
                            <a rel='noopener noreferrer' target='_blank' href="http://e-learning.sinodata.net.cn"><YoutubeOutlined /> E-learning员工学习系统</a>
                            <a rel='noopener noreferrer' target='_blank' href="http://172.169.100.126:8082/app/file/download/template?fileNamePath=spak"><MobileOutlined /> 安卓手机下载</a>
                        </div>
                    </div>
                    <div className="sino-icon-login"><img src={anniversary} alt="图标" /></div>
                </div>
                <div className="login-content">
                    <img className="img-content" src={official} alt="" />
                    <Card className="login-card">
                        <div className="login-center">
                            <div className="login-title">
                                <h1 className="login-text">中科金财运营管理系统</h1>
                                <span>Sinodata Operation Management System</span>
                            </div>
                            <Form
                                autoComplete="off"
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="userAccount"
                                    rules={[{ required: true, message: '用户名不能为空!' }]}
                                >
                                    <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入您的用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '密码不能为空!' }]}
                                >
                                    <Input
                                        size="large"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="请输入您的密码"
                                    />
                                </Form.Item>
                                <Form.Item className="login-button">
                                    <Button type="primary" size="large" block htmlType="submit" className="login-form-button">立即登录</Button>
                                </Form.Item>
                                <h3 className="text-right-password" >
                                    <span onClick={LoginModal}>忘记密码</span>
                                </h3>
                            </Form>
                            <div className="login-footer-text">
                                温馨提示：系统最低支持IE10,为更好体验,请使用新版Chrome、firefox浏览器
                             </div>
                        </div>
                    </Card>
                </div>
                <footer className="footer">
                    <LoginMenu />
                </footer>
            </div>
        </DocumentTitle>
    );
}

export default connect(state => state.user, { login })(Login);
