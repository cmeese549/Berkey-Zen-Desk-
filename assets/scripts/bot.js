const botui = new BotUI('my-botui-app');
const user = {};
user.first_name = 'Name';

function ToggleMenu(){
    $('#menu').toggleClass('menuHidden menu');
    $('#menu').toggleClass('fadeOutRight fadeInRight');
}

async function Run(){
    Init();
}

async function Init() {
    await GetName();
    InitialGreeting();
    scrollFix();
}

function scrollFix(){
    var d = $('.botui');
    d.scrollTop(d.prop("scrollHeight"));
}

async function humanFromMenu(){
    $.ajax({
        type: 'POST',
        url: '/lexify',
        data: 
        {
            msg: 'I need a human',
            name: 'name'
        }, 
        success: async function(lexData, status){
            botui.message.removeAll();
            await LexResponse(lexData);
            scrollFix();
            ToggleMenu();
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
        }
    });
}

function Restart(){
    ToggleMenu();
    botui.message.removeAll();
    InitialGreeting();
    scrollFix();
}
    
async function InitialGreeting(){
    await SendMessage(('Hello ' + user.first_name + ', Welcome to Berkey Filters!'), 0);
    await SendMessage('Is there anything I can help you with today?', 0);
    let buttons = await SendQuickReplies([
        ['Yes', true],
        ['No', false]
        ]);
    let buttonData = await botui.action.button({ action: buttons});
    if(buttonData.value){
        InitialHelp();
    }else {
        await SendMessage('Alright!  If you need anything in the futue, I\'ll be right here.', 100);
        Prompt();
    }
}

async function GetName(){
    return new Promise(async (resolve, reject) => {
        let yourName = '';
        let name = 'name=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                yourName = (c.substring(name.length, c.length));
            }
        }
        if(yourName != ''){
            user.first_name = yourName;
            resolve();
        }else {
            await SetName();
            resolve();
        }
    });
}

async function SetName(){
    return new Promise(async (resolve, reject) => {
        await SendMessage('Hello!  What is your name?');
        botui.action.text({
            action: {
                placeholder: 'Your name'
        }
        }).then((res) => {
            user.first_name = res.value;
            let str = 'name=' + res.value;
            document.cookie = str;
            resolve();
        });
    });
}

async function InitialHelp(){
    await SendMessage('What do you need help with today?', 500);
    let buttons = await SendQuickReplies([
        ['Order Issue', true],
        ['Product Issue', false],
        ['Other', 'other']
    ]);
    let buttonData = await botui.action.button({ action: buttons});
    switch(buttonData.value){
        case 'orderIssue':
            OrderIssue();
            break;
        case 'productIssue':
            ProductIssue();
            break;
        case 'other':
            OtherIssue();
            break;
        default:
            break;
    }
}

async function OrderIssue() {

}

async function ProductIssue() {

}

async function OtherIssue() {
    await SendMessage('Alright!  What do you need to know?', 500);
    await Prompt();
}

async function LexResponse(lexData){
    lexData = JSON.parse(lexData);
    console.log(lexData);
    if (lexData.multipleFound) {
        const intents = [];
        for (let i = 0; i < lexData.multiple.length; i++) {
            let qr = [];
            qr.push(lexData.multiple[i].intentName);
            qr.push(lexData.multiple[i].intentName);
            intents.push(qr);
        }
        let qrData = await SendQuickReplies(intents, 'I detected multiple questions!  I can only handle one at a time.  Were you asking about one of these topics?', 0);
        await botui.action.button({
            action : qrData
        });
    } else {
        if (lexData.intentName == null) {
            //No intent has been found, ask the user to rephrase their message
            const greet = "Hello, " + user.first_name + "!";
            await SendMessage(greet, 0)
            await SendMessage('I\'m sorry, I wasn\'t quite able to understand you.  I\'ve made a note of this so someone can help teach me how to respond!', 1000);
            await SendMessage('If I haven\'t been very helpful, please give us a call at 1-800-350-4170', 1000);
            await Prompt('Ask another question');
            scrollFix();
        } else {
            //Check if there are multiple messages to send, or just one
            if (typeof lexData.message.messages !== 'undefined') {
                //Send array of messages to user in proper order
                await SendMessages(lexData.message.messages, 0);
                await FollowUp(lexData.intentName);
                scrollFix();
                //let analytics = new dashData(messageText, senderID, event);
                //analytics.intent = { "name": lexData.intentName };
                //dashbot.logOutgoing(analytics);
            } else if (typeof lexData.message !== 'undefined'){
                //Send the single message to the user
                await SendMessage(lexData.message, 0);
                await FollowUp(lexData.intentName);
                scrollFix();
            }
        }
    }
}

async function GetGif(str){
    return new Promise(async (resolve, reject) => {
        $.ajax({
            type: 'POST',
            url: '/gif',
            data: 
            {
               keyword: str
            }, 
            success: async function(res, status){
               resolve(res);
            },
            error:   function(jqXHR, textStatus, errorThrown) {
                console.log("Error, status = " + textStatus + ", " +
                      "error thrown: " + errorThrown
                );
            }
        });
    });
}

//Helper functions
async function Prompt(place){ 
    if(typeof place == 'undefined'){
        place = 'Ask me a question!';
    }
    return new Promise(async (resolve, reject) => {
        await botui.action.text({
            action: {
                placeholder: place
            }
        }).then(async function(res) {
            $.ajax({
                type: 'POST',
                url: '/lexify',
                data: 
                {
                    msg: res.value,
                    name: 'name'
                }, 
                success: async function(lexData, status){
                    await LexResponse(lexData);
                    scrollFix();
                    resolve();
                },
                error:   function(jqXHR, textStatus, errorThrown) {
                    console.log("Error, status = " + textStatus + ", " +
                          "error thrown: " + errorThrown
                    );
                }
            });
        });
    });
}

async function SendMessage(msg, delay){
    return new Promise(async (resolve, reject) => {
        await botui.message.add({
            delay: delay,
            content: msg
        });
        scrollFix();
        resolve();
    });
}

async function SendMessages(msgs, delay){
    return new Promise(async (resolve, reject) => {
        msgs.forEach(async(elem) => {
            await SendMessage(elem.value, 0);
        });
        scrollFix();
        resolve();
    });
}

async function SendQuickReplies(buttons, msg, delay){
    return new Promise(async (resolve, reject) => {
        if(typeof msg != 'undefined'){
            await SendMessage(msg, delay);
        }
        let buttonData = [];
        buttons.forEach((elem) => {
            let tempData = 
            {
                text: elem[0],
                value: elem[1]
            }
            buttonData.push(tempData);
        });
        scrollFix();
        resolve(buttonData);
    });
}


async function FollowUp(intent){
    console.log(intent);
    switch (intent) {
        case 'Hi':
           // let jz = await GetGif('Hello');
            //jz = (JSON.parse(jz).data.images.fixed_height.url);
            //let str = '![cool gif](' + jz + ')';
            //await SendMessage(str, 0);
            Prompt();
            break;
        case 'OrderStatus':
            Prompt('Order Number');
            break;
        case 'Bye':
        case 'needHuman':
        case 'Insult':
        case 'Joke':
        case 'Humans':
        case 'Thanks':
        case 'Help':
        case 'Love':
        case 'HowAreYou':
            Prompt();
            break;
        default:
            let qrData = await SendQuickReplies([
                ['This helped, thanks!', 'Thanks'],
                ["This didn't help.", 'I need a human']
                ], 'Was I able to help?', 0);
                await botui.action.button({ action: qrData}).then(async (res) => {
                    UserFeedback(res.value);
                });
                scrollFix();
            break;
    }
}

async function UserFeedback(msg)
{
    switch (msg)
    {
        case 'Thanks':
            await SendMessage('Glad I could help!', 0);
            await Prompt('Ask another question');
            break;
        default:
            await SendMessage('Sorry I couldn\'t help out more!');
            await Prompt('Ask another question');
    }
    scrollFix();
}

Run();