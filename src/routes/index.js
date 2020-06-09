import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { getUserInfo } from "@/store/actions";
import { connect } from "react-redux";
import Layout from "@/views/layout";
import Login from "@/views/login";
class Routes extends Component {
    render () {
        const { token, roles, getUserInfo } = this.props;
        console.log(this.props)
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => {
                            if (!token) {
                                return <Redirect to="/login" />;
                            } else {
                                if (roles) {
                                    return <Layout />
                                } else {
                                    getUserInfo().then(() => <Layout />);
                                }
                            }
                        }}
                    />
                </Switch>
            </Router>
        )
    }
}
export default connect((state) => state.user, { getUserInfo })(Routes);