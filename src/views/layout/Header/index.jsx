import React from 'react';
import { Layout, Menu, Dropdown, Avatar, Modal } from "antd";
import { Link } from 'react-router-dom'
import Hamburger from "@/components/Hamburger";
import { connect } from "react-redux";
import { logout, getUserInfo } from "@/store/actions";
import { UserOutlined, SettingOutlined, LogoutOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import './index.less'
import profile from '@/assets/images/users/profile.png'
const { Header } = Layout;

const LayoutHeader = (props) => {
    const { userName, userAccount, avatar, logout } = props
    const handleLogout = () => {
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            title: "注销",
            content: "确定要退出系统吗?",
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                logout();
            },
        });
    };
    const onClick = ({ key }) => {
        switch (key) {
            case "logout":
                handleLogout()
                break;
            default:
                break;
        }
    };

    const menu = (
        <Menu onClick={onClick}>
            <div className="user-info">
                <div className="user-image">
                    {avatar ?
                        <Avatar shape="square" size={48} src={avatar} />
                        :
                        <Avatar shape="square" size={48} src={profile} />
                    }
                </div>
                <div className="user-text">
                    <span>{userName}</span>
                    <span>{userAccount}</span>
                </div>
            </div>
            <Menu.Divider />
            <Menu.Item key="dashboard">
                <Link to="/dashboard"><UserOutlined /> 个人信息</Link>
            </Menu.Item>
            <Menu.Item key="project">
                <Link to="/editPassowrd"><SettingOutlined /> 修改密码 </Link>
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
                                {avatar ?
                                    <Avatar shape="square" size={48} src={avatar} />
                                    :
                                    <Avatar shape="square" size={48} src={profile} />
                                }
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </>
    );
}

export default connect(state => state.user, { logout, getUserInfo })(LayoutHeader)
