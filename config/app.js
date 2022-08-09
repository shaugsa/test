module.exports = {
    htmlmin: {
        collapseWhitespace: true,
    },
    pug: {
        pretty : true,
        data: {
            news: require('../data/news.json')
        }
    },

    webpack : {
        mode: 'development'
    },

    imagemin: {
        verbose: true
    }
}