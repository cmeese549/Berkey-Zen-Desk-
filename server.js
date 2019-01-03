const zChat = require('zsdk/web-sdk.js');

zChat.init({
    account_key: 'YzXWHZv4IzDHt5R1JmNR5X0B7MbkKqxr'
});

zChat.on('connection_update', function(status) {
    if (status === 'connected') {
        console.log('ayo');
    }
});