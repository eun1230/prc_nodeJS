const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3001',  // 프록시할 대상 서버
            changeOrigin: true,               // 타겟 서버의 호스트 헤더를 변경
        })
    );
};
