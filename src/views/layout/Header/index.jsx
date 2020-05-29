import React from 'react';
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom'
import Hamburger from "@/components/Hamburger";
import { connect } from "react-redux";
import './index.less'
const { Header } = Layout;

const LayoutHeader = (props) => {
    const { sidebarCollapsed } = props
    console.log(props)
    // 菜单栏显示隐藏
    // const computedStyle = () => {
    //     let styles;
    //     if (sidebarCollapsed) {
    //         styles = {
    //             width: "100",
    //         };
    //     } else {
    //         styles = {
    //             width: "100%",
    //         };
    //     }
    //     return styles
    // }
    return (
        <>
            {/* 这里是仿照antd pro的做法,如果固定header，
        则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
            {/* <Header style={computedStyle()}> */}
            <Header>
                <Hamburger />
                <div className="right-menu">
                    <div className="dropdown-wrap">
                    </div>
                </div>
            </Header>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        ...state.app
    }
}
export default connect(mapStateToProps)(LayoutHeader)
