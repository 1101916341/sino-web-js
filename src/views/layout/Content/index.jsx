import React from 'react'
import DocumentTitle from 'react-document-title' // 浏览器title
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group' // 动画效果
import { getMenuItemInMenuListByProperty } from "@/utils";
import routeList from '@/config/routeMap'; // 路由跳转
import menuList from '@/config/menuConfig'; // 菜单树
import { Layout } from 'antd'
const { Content } = Layout;

const getPageTitle = (menuList, pathname) => {
    let title = '中科金财' // 初始化标题
    let item = getMenuItemInMenuListByProperty(menuList, "path", pathname);
    if (item) {
        title = `${item.title} - 中科金财`;
    }
    return title;
}

const LayoutContent = (props) => {
    const { roles, location } = props;
    const { pathname } = location;
    const handleFilter = (route) => {
        // 过滤没有权限的页面
        return roles !== "admin" || !route.roles || route.roles.includes(roles);
    };
    return (
        <DocumentTitle title={getPageTitle(menuList, pathname)}>
        {/* <DocumentTitle title='中科金财'> */}
            <Content style={{ height: "calc(100% - 100px)" }}>
                <TransitionGroup>
                    <CSSTransition
                        key={location.pathname}
                        timeout={500}
                        classNames="fade"
                        exit={false}
                    >
                        <Switch location={location}>
                            <Redirect exact from="/" to="/dashboard" />
                            {routeList.map((route) => {
                                return (
                                    handleFilter(route) && (
                                        <Route
                                            component={route.component}
                                            key={route.path}
                                            path={route.path}
                                        />
                                    )
                                );
                            })}
                            <Redirect to="/error/404" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Content>
        </DocumentTitle>
    );
}

export default connect(state => state.user)(withRouter(LayoutContent));
