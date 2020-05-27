import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'
import TagsView from './TagsView'
import { Layout } from 'antd'
const Main = (props) => {
    // const { tagsView } = props;
    return (
        <Layout style={{ minHeight: "100vh" }}>
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
