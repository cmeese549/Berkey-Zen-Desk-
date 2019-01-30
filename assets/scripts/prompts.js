async function PromptEmail(){
    return new Promise(async (resolve, reject) => {
        await botui.action.text({
            action: {
                placeholder: 'Your email address'
            }
        }).then(async (res) => {
            let valid = validateEmail(res.value);
            if(valid){
                resolve(res.value);
            }else{
                SendMessage('That didn\'t appear to be a valid email address, please try again', 0);
                reject(false);
            }
        });
    });
}

async function zPrompt(){
    return new Promise(async (resolve, reject) => {
        await botui.action.text({
            action: {
                placeholder: 'Message for agent'
            }
        }).then((res) => {
            if(!zChat.isChatting){
                postToLex(res);
                resolve();
            }
            sendChat(res.value);
            zPrompt();
            resolve();
        });
    });
}

//Helper functions
async function Prompt(placeholder){
    if(zChat.isChatting()){
        zPrompt();
        return;
    }
    if(typeof placeholder == 'undefined'){
        placeholder = 'Ask me a question!';
    }
    return new Promise(async (resolve, reject) => {
        await botui.action.text({
            action: {
                placeholder: placeholder
            }
        }).then( (res) => {
            postToLex(res);
        });
    });
}
