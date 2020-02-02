const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withImages({
    env: {
        API_URL: 'http://localhost:3001/',
        PORT: 3000,
        ADMIN_EMAIL: 'timoxin.artur@gmail.com',
    },
}));