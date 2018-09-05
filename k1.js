const doIt = (event, content, callback) => {
    console.log(`doIt called with payload ${JSON.stringify(event)}`);
    callback(null, 'ok');
};

module.exports = {
    doIt
};