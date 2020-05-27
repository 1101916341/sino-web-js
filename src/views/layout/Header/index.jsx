import React from 'react';
import { Layout } from "antd";
import './index.less'
const { Header } = Layout;

const LayoutHeader = () => {
    return (
        <>
            {/* 这里是仿照antd pro的做法,如果固定header，
        则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
            <Header>
                <div className="right-menu">
                    <div className="dropdown-wrap">

                    </div>
                </div>
            </Header>
        </>
    );
}

export default LayoutHeader;
