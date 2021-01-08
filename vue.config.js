module.exports = {
    devServer: {
        compress: true,
        proxy: {
            "^/v1": {
                target: "https://dev.musicmash.me",
                secure: false,
            },
        },
    },
};
