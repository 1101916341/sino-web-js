const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/app', createProxyMiddleware({
        target: 'http://172.169.100.126:8082',
        // target: 'http://172.169.1.42:8095',
        // target: 'http://172.169.100.121:8082',
        // target: 'http://172.169.200.207:8082',
        changeOrigin: true,
    }));
    app.use('/admin', createProxyMiddleware({
        target: 'http://172.169.100.126:8082',
        // target: 'http://172.169.1.42:8095',
        // target: 'http://172.169.100.121:8082',
        // target: 'http://172.169.200.207:8082',
        changeOrigin: true,
    }));
    app.use('/logout', createProxyMiddleware({
        target: 'http://172.169.100.126:8082',
        // target: 'http://172.169.1.42:8095',
        // target: 'http://172.169.100.121:8082',
        // target: 'http://172.169.200.207:8082',
        changeOrigin: true,
    }));
    app.use('/toLogin', createProxyMiddleware({
        target: 'http://172.169.100.126:8082',
        // target: 'http://172.169.1.42:8095',
        // target: 'http://172.169.100.121:8082',
        // target: 'http://172.169.200.207:8082',
        changeOrigin: true,
    }));
};