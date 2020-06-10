import React from "react";
import { Result, Button } from 'antd';

const NotFound = (props) => {
    const { history } = props;
    const goHome = () => history.replace("/");
    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉，你访问的页面不存在!"
            extra={<Button onClick={goHome} type="primary">回到首页</Button>}
        />
    );
}

export default NotFound;