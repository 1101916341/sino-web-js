import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'
import TagsView from './TagsView'
import { Layout } from 'antd'
import './layout.less'
const Main = (props) => {
    // const { tagsView } = props;
    return (
        <Layout className="layout-hight">
            <Sider />
            <Layout>
                <Header />
                <TagsView />
                {/* {tagsView ? <TagsView /> : null} */}
                <Content />
            </Layout>
        </Layout>
    );
}

export default connect()(Main);
