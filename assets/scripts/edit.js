var editing = false;

function editUtterance(index){
    if(!editing)
    {
        editing = true;
        let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.sampleUtterances[index] + '">';
        bigStr += '<input type="button" onclick="putUtterance(' + index + ')" value="Submit"><input type="button" onclick="deleteUtterance(' + index + ')" value="Delete">';
        document.getElementById(newIntent.sampleUtterances[index]).style.backgroundColor = '#BBEA75';
        document.getElementById(newIntent.sampleUtterances[index]).innerHTML = bigStr;
    }
}

function editResponse(index){
    if(!editing)
    {
        editing = true;
        let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.conclusionStatement.messages[index].content + '">';
        bigStr += '<input type="button" onclick="putResponse(' + index + ')" value="Submit">';
        bigStr += '<input type="button" onclick="deleteResponse(' + index + ')" value="Delete">';
        let domStr = 'editResponse' + index;
        document.getElementById(domStr).style.backgroundColor = '#BBEA75';
        document.getElementById(domStr).innerHTML = bigStr;
    }
}

function deleteGroup(group){
    if(!editing)
    {
        editing = true;
        let newConclusionStatements = [];
        newIntent.conclusionStatement.messages.forEach((elem) => {
            if(elem.groupNumber !== group){
                newConclusionStatements.push(elem);
            }
        });
        newIntent.conclusionStatement.messages = newConclusionStatements;
        putUpdate('/putIntent');
    }
}

function addMessageGroup(group){
    if(!editing)
    {
        if(newIntent.conclusionStatement.messages.slice(-1)[0].groupNumber !== (group - 1)){
            alert('You cannot add a new message group unless the previous message group contains a message!');
        }else{
            let str = '<span id="messageGroupParent' + group + '">';
            str += '<span id="messageGroupTitle' + group + '">Message Group ' + group + ':';
            str += '<input type="button" onclick="deleteGroup(' + group + ')" value="Delete"></span>';
            str += '</span><ol id="messageGroup' + group + '">';
            str += '<li id="addMessageToGroup' + group + '">';
            str += '<span onclick="addMessage(' + group + ')">Add Message</span></li></ol></span>';
            document.getElementById('response').innerHTML += str;
            if(group < 5){
                str = '<span onclick="addMessageGroup(' + (group + 1) + ')">Add Message Group</span>';
                document.getElementById('newGroup').innerHTML = str;
            }else{
                document.getElementById('newGroup').innerHTML = '';
            }
        }
    }
}

function addMessage(group){
    if(!editing)
    {
        editing = true;
        let domStr = 'addMessageToGroup' + group;
        let str = '<input id="addMessageField" type="text">';
        str += '<input type="button" onclick="putMessage(' + group + ')" value="Submit">';
        document.getElementById(domStr).innerHTML = str;
    }
}

function putMessage(group){
    let newMessage = {
        contentType: 'PlainText',
        content: document.getElementById('addMessageField').value,
        groupNumber: group
    }
    newIntent.conclusionStatement.messages.push(newMessage);
    putUpdate('/putIntent');
}

function resetAddUtterance(){
    document.getElementById('addUtterance').innerHTML = '<li id="addUtterance"><span onclick="addUtterance()">Add Utterance</span></li>';
}

function addUtterance(){
    if(!editing)
    {
        editing = true;
        let bigStr = '<input id="editIntentField" type="text" value="">';
        bigStr += '<input type="button" onclick="putNewUtterance()" value="Submit"><input type="button" onclick="resetAddUtterance()" value="Cancel">';
        document.getElementById('addUtterance').style.backgroundColor = '#BBEA75';
        document.getElementById('addUtterance').innerHTML = bigStr;
    }
}

function putNewUtterance(){
    newIntent.sampleUtterances.push(document.getElementById("editIntentField").value);
    putUpdate('/putIntent');
}

function putUtterance(index){
    newIntent.sampleUtterances[index] = document.getElementById("editIntentField").value;
    putUpdate('/putIntent');
}

function deleteUtterance(index){
    let newUtterances = [];
    console.log(newIntent);
    newIntent.sampleUtterances.forEach((elem) => {
        if(elem !== newIntent.sampleUtterances[index]){
            newUtterances.push(elem);
        }
    });
    newIntent.sampleUtterances= newUtterances;
    putUpdate('/putIntent');
}

function deleteResponse(index){
    newIntent.conclusionStatement.messages.splice(index, 1);
    putUpdate('/putIntent');
}

function putResponse(index){
    newIntent.conclusionStatement.messages[index].content = document.getElementById("editIntentField").value;
    putUpdate('/putIntent');
}

function putUpdate(url){
    $.ajax({
        type: 'POST',
        url: url,
        data: 
        {
            newIntent: newIntent
        }, 
        success: async function(lexData, status){
            location.reload();
            editing = false;

        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
            alert('Error updating Lexicon, please try again later');
        }
    });
}