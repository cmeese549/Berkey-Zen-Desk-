const express = require('express');
const app = express();
const path = require('path');
const AWS = require('aws-sdk');
const giphy = require('giphy-api')('XjJamx628YYbeFseYigMtx7UAV1XZUq3');
const bodyParser = require('body-parser');
let cookies;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
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
        }, function(err, resp) {
            res.end(JSON.stringify(resp));
        }
    );
});

app.post('/lexify', async function(req,res){
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
            let logStr = 'Log info! :';

            function dupes(arr, lexer) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].intentName == lexer.intentName) {
                        return false;
                    }
                }
                return true;
            };
            for (let i = 0; i < messageStrings.length; i++) {
                logStr += 'Iteration ' + i + ' ---- ';
                if (messageStrings[i] !== '') {
                    params.inputText = messageStrings[i];
                    logStr += ' params updated ' + JSON.stringify(params);
                    let lexer = await send(params);
                    logStr += 'Posting to lex now ---- ';
                    logStr += JSON.stringify(lexer);
                    let checkDupes = dupes(intents, lexer);
                    if (checkDupes && typeof lexer.intentName == 'string' && lexer.message !== 'none' && lexer.intentName !== 'Bye' && lexer.intentName !== 'Sorry' && lexer.intentName !== 'Initialize' && lexer.intentName !== 'GoAway' && lexer.intentName !== 'Thanks' && lexer.intentName !== 'Hi' && lexer.intentName !== 'Help' && lexer.intentName !== 'Insult') {
                        logStr += 'Should push to intents now';
                        intents.push(lexer);
                    }
                    logStr += 'End of log for iteration ' + i + '.'
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

app.listen(port, () => {
    console.log('Heeeeeeeeeeeeeeeeeeeeeek');
});