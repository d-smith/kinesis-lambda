const doIt = async (event, context) => {
    console.log(`doIt called with payload ${JSON.stringify(event)}`);
    return 'ok';
};

module.exports = {
    doIt
};