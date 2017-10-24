let login = async (ctx, next) => {
    let {username, password} = ctx.request.body;

    try {
        let response = {username, password};
        ctx.response.body = response;
    } catch(e) {
        ctx.response.body = {error: 'error'};
    }
};

module.exports = {
    'PUT /user': login
};
