module.exports = {
    devServer:{
        proxy:{
            '/':{
                target:"http://vebcoder.cn:9527",
                changeOrigin:true,
                ws:false,
                // cookieDomainRewrite:{
                //     "*":'127.0.0.1'
                // }
                // cookieDomainRewrite:{
                //     "*":"127.0.0.1"
                // }
            }

        }
    }
};
