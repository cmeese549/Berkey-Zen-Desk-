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

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/admin', (req,res) => {
    res.sendFile(path.join(__dirname + '/admin.html'));
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

app.get('/admin/view-intent', async (req,res) => {
    res.sendFile(path.join(__dirname + '/view.html'));
});

app.post('/intent', async (req, res) => {
    AWS.config.region = 'us-west-2';
    const lexmodel = new AWS.LexModelBuildingService();
    lexmodel.getIntent({ version: "$LATEST", name: req.body.name}, (err,data) => {
        if(err){
            console.log(err);
            return;
        }else{
            res.end(JSON.stringify(data));
        }
    });
});

function lexPutIntent(lexmodel, botData){
    console.log('putting intent');
    return new Promise((resolve, reject) => {
        lexmodel.putIntent(botData, (err, data) => {
            if(err){
                console.log('put intent err');
                console.log(err);
                reject();
            }else{
                console.log('creatig new intent version');
                lexmodel.createIntentVersion({name: botData.name}, (err, data2) => {
                    if(err){
                        console.log('create intent version error');
                        console.log(err);
                        reject();
                    }else{
                        data.newVersion = data2.version;
                        resolve(data);
                    }
                });
            }
        });
    });
}

function lexGetBot(lexmodel){
    console.log('getting bot');
    return new Promise((resolve, reject) => {
        lexmodel.getBot({name: 'BerkeyBot', versionOrAlias: '$LATEST'}, (err, data) => {
            if(err){
                console.log('getBot err');
                console.log(err);
                reject();
            }else{
                resolve(data);
            }   
        });
    });
}

async function lexPutBot(lexmodel, intents, checksum, version, name){
    intents.forEach((elem) => {
        if(elem.intentName == name){
            elem.intentVersion = version;
        }
    });
    console.log('putting bot')
    return new Promise((resolve, reject) => {
        lexmodel.putBot({ 
            name: 'BerkeyBot',
            abortStatement: {
                messages: [{
                    content: 'none',
                    contentType: 'PlainText'
                }]
            },
        clarificationPrompt: {
            maxAttempts: 5,
            messages: [{
                content: 'none',
                contentType: 'PlainText'
            }]
        },
        locale: 'en-US', 
        childDirected: false, 
        createVersion: false,
        processBehavior: 'BUILD',
        intents: intents,
        checksum: checksum
        }, (err, data) => {
            if(err){
                console.log('put bot err');
                console.log(err);
                reject();
            }else{
                resolve(data);
            }
        });
    });
}

function lexCreateBotVersion(lexmodel, botInfo){
    console.log('creating new bot version');
    return new Promise((resolve, reject) => {
        lexmodel.createBotVersion({name: 'BerkeyBot', checksum: botInfo.checksum}, (err, data) => {
            if(err){
                console.log('create bot version err');
                console.log(err);
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

app.get('/publishBot', async (req,res) => {
    console.log('Starting publish------------------------------');
    console.log('publishing bot now');
    publishing = true;
    AWS.config.region = 'us-west-2';
    const lexmodel  = new AWS.LexModelBuildingService();
    let currentBot = await lexGetBot(lexmodel);
    lexCreateBotVersion(lexmodel, currentBot).then(
        (data) => {
            console.log('yeet bot got published');
            res.end(JSON.stringify(data));
        }
    ).catch(
        (err) => {
            console.log('rip bot publish failed');
            res.end(JSON.stringify(err));
        }
    );
});

app.post('/putIntent', async (req,res) => {
    AWS.config.region = 'us-west-2';
    const lexmodel = new AWS.LexModelBuildingService();
    try{
        console.log('Starting update------------------------------');
        let putIntent = await lexPutIntent(lexmodel, req.body.newIntent);
        let currentBot = await lexGetBot(lexmodel);
        await lexPutBot(lexmodel, currentBot.intents, currentBot.checksum, putIntent.newVersion, putIntent.name);
        console.log('yeet bot got updated');
        res.end(JSON.stringify(putIntent));
    }
    catch(err){
        console.log('rip bot update failed');
        if(err){
            console.log(err);
        }
        res.end('failed');
    }
});

app.post('/intents', async (req,res) => {
    AWS.config.region = 'us-west-2';
    const lexmodel = new AWS.LexModelBuildingService();
    lexmodel.getIntents({maxResults: 15, nextToken: req.body.page}, async (err, data) => {
        if(err){
            console.log(err);
            return;
        }else{
            res.end(JSON.stringify(data));
        }
    });
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