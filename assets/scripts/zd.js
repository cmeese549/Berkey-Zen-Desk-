key = secretThing().then((res) => {
    zChat.init({
        account_key: res
    });
});

async function startChat(msg){
    let status = zChat.getAccountStatus();
    s = false;
    if(status == 'online' && s){
        zChat.sendChatMsg(msg, (err) => {
            if(err){
                console.log(err);
                SendMessage('Sorry, something went wrong.  Please try again later.', 0);
                return;
            }
        });
        let qp = (zChat.getQueuePosition());
        SendMessage('You are currently at position ' + qp + ' in the queue!  We will be with you as soon as we can.');
    }else{
        SendMessage('We currently don\'t have any agents online!  Would you like to send an offine support request?  An agent will view your request and get back with you ASAP.', 0);
        //Prompt for email address and then for message and then send the message and tell them that it was sent
        let buttons = await SendQuickReplies([
            ['Yes', true],
            ['No', false]
            ]);
        let buttonData = await botui.action.button({ action: buttons});
        if(buttonData.value){
            SendMessage('Great!  First I will need your email address so we can get back to you.', 0);
            await GetEmail().then(async (email) => {
                SendMessage('Awesome, now just type your message for us and I\'ll send it off!', 0);
                let msg = await PromptOfflineMSG();
                let payload = 
                {
                    name: user.first_name,
                    email: email,
                    message: msg
                };
                zChat.sendOfflineMsg(payload, (err) => {
                    if(err){
                        SendMessage('Something went wrong, please try again later.', 0);
                        return;
                    }
                    SendMessage('Your message is sent!  We will get back to you at ' + email + ' as soon as possible.', 0);
                });
            }).catch((err) => {
                console.log(err);
                return;
            });
        }else{
            await SendMessage('Alright!  No problem!  You can still ask me your questions and I will do my best to answer!', 0);
            Prompt();
        }
    }
}

async function sendChat(msg){
    zChat.sendChatMsg(msg, (err) => {
        if(err){
            console.log(err);
            SendMessage('Sorry, something went wrong.  Please try again later.', 0);
        }   
    });
}

zChat.on('connection_update', function(status) {
    if (status === 'connected') {  
        console.log('zChat connected');
    }
});

zChat.on('chat', (data) => {
    console.log(data);
    if(data.display_name == 'Coral (Virtual Assistant)'){
        return;
    }
    switch(data.type){
        case 'chat.memberjoin':
            chatMemberJoin(data);
            break;
        case 'typing':
            typing(data);
            break;
        case 'chat.msg':
            receiveMessage(data);
            break;
        case 'chat.memberleave':
            chatMemberLeave(data);
            break;
        default:
            break;
    }
});

function chatMemberJoin(data){
    if(data.nick !== 'visitor'){
        SendMessage((data.display_name + ' has joined the chat!'), 0);
        zPrompt();
    }
}

function chatMemberLeave(data){
    if(data.nic !== 'visitor'){
        SendMessage((data.display_name + ' has left the chat!'), 0);
        console.log(zChat.isChatting);
        zChat.endChat((err) => {
            if(err){
                console.log(err);
            }
        });
        Prompt();
    }
}

function receiveMessage(data){
    SendMessage(data.msg);
    zPrompt();
}

function typing(data){
    if(data.typing){
        startTyping();
    }else{
        stopTyping();
    }
}