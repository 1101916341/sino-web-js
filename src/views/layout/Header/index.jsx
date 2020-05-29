import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { Link } from 'react-router-dom'
import Hamburger from "@/components/Hamburger";
import { connect } from "react-redux";
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './index.less'
const { Header } = Layout;

const LayoutHeader = () => {
    const onClick = ({ key }) => {
        switch (key) {
            case "logout":
                console.log('退出')
                break;
            default:
                break;
        }
    };

    const menu = (
        <Menu onClick={onClick}>
            <div className="user-info">
                <div className="user-image">
                    <Avatar shape="square" size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
                <div className="user-text">
                    <span>立新</span>
                    <span>lixin</span>
                </div>
            </div>
            <Menu.Divider />
            <Menu.Item key="dashboard">
                <Link to="/dashboard"><UserOutlined /> 个人信息</Link>
            </Menu.Item>
            <Menu.Item key="project">
                <Link to="/dashboard"><SettingOutlined /> 修改密码 </Link>
            </Menu.Item>
            <Menu.Item key="logout"><LogoutOutlined /> 退出</Menu.Item>
        </Menu>
    );
    return (
        <>
            {/* 这里是仿照antd pro的做法,如果固定header，
        则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
            <Header>
                <Hamburger />
                <div className="right-menu">
                    <div className="dropdown-wrap">
                        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
                            <div>
                                <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default connect()(LayoutHeader)
