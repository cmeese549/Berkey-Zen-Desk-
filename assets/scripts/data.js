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
            zChat.setVisitorInfo({display_name: res.value}, (err) => {
                if(err){
                    console.log(err);
                }
            });
            resolve();
        });
    });
}

async function GetEmail(){
    return new Promise(async (resolve, reject) => {
        await emailHelper().then(async (res) => {
            resolve(res);
        }).catch(async (err) => {
            await emailHelper().then(async (res) => {
                resolve(res);
            }).catch(async (err) => {
                await emailHelper().then(async (res) => {
                    resolve(res);
                }).catch(async (err) => {
                    await emailHelper().then(async (res) => {
                        resolve(res);
                    }).catch(async (err) => {
                        await emailHelper().then(async (res) => {
                            resolve(res);
                        }).catch(async (err) => {
                            SendMessage('I\'m sorry, but I couldn\'t undertand you.  Please ensure you have a valid email address and try again.', 0);
                            Prompt();
                            reject(false);
                        });
                    });
                });
            });
        });
    });
}

async function emailHelper(){
    return new Promise(async (resolve, reject) => {
        await PromptEmail().then(async (res) => {
            resolve(res);
        }).catch(async (err) => {
            await PromptEmail().then(async (res) => {
                resolve(res);
            }).catch(async (err) => {
                await PromptEmail().then(async (res) => {
                    resolve(res);
                }).catch(async (err) => {
                    await PromptEmail().then(async (res) => {
                        resolve(res);
                    }).catch(async (err) => {
                        await PromptEmail().then(async (res) => {
                            resolve(res);
                        }).catch(async (err) => {
                            reject(false);
                        });
                    });
                });
            });
        });
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function secretThing(){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/14353525522335123452', 
            success: (res, status) => {
               resolve(res);
            },
            error:  (jqXHR, textStatus, errorThrown) => {
                console.log("Error, status = " + textStatus + ", " +
                      "error thrown: " + errorThrown
                );
                reject();
            }
        });
    });
}