let mock = require('./mock')();

let homeMock = require('./home/index.mock');

mock.route('get', '/api/home/post/data', homeMock.postData)
    .route('get', '/api/home/post/post', homeMock.testPost);

module.exports = () => mock.routes();