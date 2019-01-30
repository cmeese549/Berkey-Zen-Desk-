const express = require('express');
const app = express();
const dashbot = require('dashbot')
const path = require('path');
const AWS = require('aws-sdk');
const giphy = require('giphy-api')('XjJamx628YYbeFseYigMtx7UAV1XZUq3');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
  extended: true
}));
const port = 3000;

app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/gif', async function(req,res) {   
    giphy.translate({
        rating: 'y',
        fmt: 'json',
        s: req.body.keyword,
        limit: 1
        }, function(err, succ) {
            res.end(JSON.stringify(succ));
        }
    );
});

app.get('/14353525522335123452', (req, res) => {
    res.end('YzXWHZv4IzDHt5R1JmNR5X0B7MbkKqxr');
});

app.post('/lexify', async (req,res) => {
    messageText = req.body.msg;
    senderID = req.body.name;
    function regx(str) {
        return JSON.parse(JSON.stringify(str).replace(/\\"/g, '"').replace(/\"{/g, '{').replace(/\"}]}"/g, '"}]}'));
    }
    function send(params) {
        return new Promise((resolve, reject) => {
            lexruntime.postText(params, function(err, data) {
                if (err) {
                    resolve(err);
                } else {
                    data = regx(data);
                    resolve(data);
                }
            });
        });
    };
    const userInput = messageText;
    AWS.config.region = 'us-west-2';
    const lexruntime = new AWS.LexRuntime();
    const params = {
        botAlias: "BerkeyBot",
        botName: "BerkeyBot",
        inputText: messageText,
        userId: senderID,
        sessionAttributes: {}
    };
    const init = await send(params);
    if (init.intentName == null) {
        const messageStrings = userInput.split(' ');
        const intents = [];
        function dupes(arr, lexer) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].intentName == lexer.intentName) {
                    return false;
                }
            }
            return true;
        };
        for (let i = 0; i < messageStrings.length; i++) {     
            if (messageStrings[i] !== '') {
                params.inputText = messageStrings[i];
                let lexer = await send(params);
                let checkDupes = dupes(intents, lexer);
                if (checkDupes && typeof lexer.intentName == 'string' && lexer.message !== 'none' && lexer.intentName !== 'Bye' && lexer.intentName !== 'Sorry' && lexer.intentName !== 'Initialize' && lexer.intentName !== 'GoAway' && lexer.intentName !== 'Thanks' && lexer.intentName !== 'Hi' && lexer.intentName !== 'Help' && lexer.intentName !== 'Insult') {
                    intents.push(lexer);
                }
            }
        }
        if (intents.length > 1) {
            init.multipleFound = true;
            init.multiple = intents;
            res.end(JSON.stringify(init));
        } else if (intents.length == 1) {
            intents[0].multipleFound = false;
            res.end(JSON.stringify(init));
        } else if (intents.length == 0) {
            init.multipleFound = false;
            res.end(JSON.stringify(init));
        }
    } else {
        init.multipleFound = false;
        res.end(JSON.stringify(init));
    }
});

app.post('/dashbot/logOutgoing', async function(req, res){

});

app.listen(port, () => {
    console.log('Heeeeeeeeeeeeeeeeeeeeeek');
});