import axios from 'axios'
import store from '@/store'
import { message } from "antd";
import { getToken } from "@/utils/auth";
import { removeToken } from './auth'
//创建一个axios示例
const service = axios.create({
    headers: {
        'Access-Control-Allow-Origin': 'http://172.169.100.126:8082',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'x-requested-with': 'XMLHttpRequest'
    },
    baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
    timeout: 200000, // 相应时长
});
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发出请求前做点什么
        if (store.getState().user.token) {
            // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
            config.headers.Authorization = getToken();
        }
        return config;
    },
    (error) => {
        // 处理请求错误
        console.log(error); // 用于调试
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    response => {
        // 删除session信息
        if (response.data.code) {
            window.location.href = '/';
            removeToken('userInfo')
        } else {
            return response
        }
        // 返回错误信息
        if (response.data.resultCode === 500) {
            message.error(response.data.resultMessage)
        }
    },
    error => {
        Promise.reject(error)
    }
);

export default service;