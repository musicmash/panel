module.exports = {
    devServer: {
        proxy: {
            "^/v1": {
                target: 'https://dev.musicmash.me',
                secure: false,
            }
        }
    }
};
