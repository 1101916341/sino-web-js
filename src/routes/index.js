import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "@/views/layout";
import Login from "@/views/login";
class Routes extends Component {
    render () {
        const { token, role, getUserInfo } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => {
                            if (token) {
                                return <Redirect to="/login" />;
                            } else {
                                if (role) {
                                    return <Layout />
                                } else {
                                    return <Layout />
                                }
                            }
                        }}
                    />
                </Switch>
            </Router>
        )
    }
}
export default connect()(Routes)