const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withImages({
    target: 'serverless',
    env: {
        API_URL: 'http://165.22.71.123:3001/',
        PORT: 80,
        ADMIN_EMAIL: 'mail@jays.coffee',
        GOOGLE_MAPS_API_KEY: 'AIzaSyBXznfCqQJRI20mRwsjC5XGtLzUQHPadGo'
    },
}));
