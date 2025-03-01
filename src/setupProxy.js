const {createProxyMiddleware} = import("http-proxy-middleware");

export default (app) => {
    app.use(
        '/ajax',
        createProxyMiddleware({
            target:'https://m.maoyan.com',
            changeOrigin: true
        })
    )
}

