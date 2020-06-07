import React, { Component } from 'react';
import { Form, Input, Button, Card, Menu, Dropdown, Modal } from 'antd';
import {
    UserOutlined,
    LockOutlined,
    UsergroupAddOutlined,
    HomeOutlined,
    MobileOutlined,
    YoutubeOutlined,
    CommentOutlined,
    RobotOutlined,
    PhoneOutlined,
    FileSearchOutlined
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import anniversary from '../../assets/images/loginImage/anniversary.png'
import official from '../../assets/images/loginImage/official.png'
import './login.less'
const { confirm } = Modal;
class Login extends Component {
    render() {
        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        function showConfirm() {
            confirm({
                className: 'login-modal',
                centered: true,
                title: '提示',
                content: '重置密码需发送邮件给运管项目经理陈景硕（chenjingshuo@sinodata.net.cn），并抄送给您的直属上级领导。',
                okText: '确定',
                cancelText: ' ',
                onOk() { }
            })
        }
        const menu = (
            <Menu className="footer-menu">
                <Menu.Item>
                    <div>
                        <RobotOutlined />
                        <div>
                            <span>使用对接人</span>
                            <span>陈景硕</span>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        <PhoneOutlined />
                        <div>
                            <span>咨询电话</span>
                            <span>15699993889</span>
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        <FileSearchOutlined />
                        <div>
                            <span>建议反馈</span>
                            <span>运营系统是不完善的，我们渴望合理、清晰的建议</span>
                        </div>
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="login">
                <div>
                    <div className="login-header">
                        <img
                            src={logo}
                            alt="中科金财"
                            className="log-style"
                        />
                        <div className="sino-ul">
                            <a href="http://www.sinodata.net.cn/"><HomeOutlined /> 公司官网</a>
                            <a href="http://ehr.sinodata.net.cn"><UsergroupAddOutlined /> ERH员工系统</a>
                            <a href="http://e-learning.sinodata.net.cn"><YoutubeOutlined /> E-learning员工学习系统</a>
                            <a href="http://172.169.100.126:8082/app/file/download/template?fileNamePath=spak"><MobileOutlined /> 安卓手机下载</a>
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
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="username"
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
                                    <span onClick={showConfirm}>忘记密码</span>
                                </h3>
                            </Form>
                            <div className="login-footer-text">
                                温馨提示：系统最低支持IE10,为更好体验,请使用新版Chrome、firefox浏览器
                             </div>
                        </div>
                    </Card>
                </div>
                <footer className="footer">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className="footer-button"><CommentOutlined />咨询建议</div>
                    </Dropdown>
                </footer>
            </div>
        );
    }
}
export default Login;