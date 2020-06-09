import React from 'react'
import { Menu, Dropdown } from 'antd';
import { RobotOutlined, PhoneOutlined, FileSearchOutlined, CommentOutlined } from '@ant-design/icons';
import '../login.less'

const LoginMenu = () => {
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
    )
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div className="footer-button"><CommentOutlined />咨询建议</div>
        </Dropdown>
    );
}

export default LoginMenu;