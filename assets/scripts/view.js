var newIntent = {};
var editing = false;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function renderIntent(lexData){
    document.getElementById('intentName').innerHTML = lexData.name;
    let bigStr = '';
    lexData.sampleUtterances.forEach((elem) => {
        let str = '<li class="edit" onclick="editUtterance(' + lexData.sampleUtterances.indexOf(elem) + ')" id="' + elem + '"><span >' + elem + '</span></li>';
        bigStr += str;
    });
    bigStr += '<li class="edit" onclick="addUtterance()" id="addUtterance"><span>Add Utterance</span></li>';
    document.getElementById('utterances').innerHTML = bigStr;
    bigStr = '';
    let i;
    let lastGroup = 1;
    lexData.conclusionStatement.messages.forEach((elem) => {
        if(elem.groupNumber > lastGroup){
            lastGroup = elem.groupNumber;
        }
    });
    for(i = 1; i <= lastGroup; i++){
        let str = '<div class="block msgroup" id="messageGroupParent' + i + '"><span id="messageGroupTitle' + i + '">Message Group ' + i + ':';
        str += '<input type="button" class="del" onclick="deleteGroup(' + i + ')" value="Delete"></span>';
        str += '<ol id="messageGroup' + i + '"></ol></div>';
        bigStr += str;
    }
    document.getElementById('response').innerHTML = bigStr;
    if(lastGroup < 5){
        let str = '<span onclick="addMessageGroup(' + i + ')">Add Messagse Group</span>';
        document.getElementById('newGroup').innerHTML = str;
    }
    lexData.conclusionStatement.messages.forEach((elem) => {
        let domStr = 'messageGroup' + elem.groupNumber;
        let str = '<li class="edit" onclick="editResponse(' + lexData.conclusionStatement.messages.indexOf(elem) + ')" id="editResponse' + lexData.conclusionStatement.messages.indexOf(elem) + '">';
        str += '<span >' + elem.content + '</span></li>';
        document.getElementById(domStr).innerHTML += str;
    });
    let counter = 0;
    for(let i = 0; i < lastGroup; i++){
        let currentGroup = i + 1;
        lexData.conclusionStatement.messages.forEach((elem) => {
            if(elem.groupNumber == currentGroup){
                counter = counter + 1;
            }
        });
        if(counter < 5){
            let domStr = 'messageGroup' + currentGroup;
            let str = '<li class="edit onclick="addMessage(' + currentGroup + ')" addmsg" id="addMessageToGroup' + currentGroup + '">';
            str += '<span >Add Message</span></li>';
            document.getElementById(domStr).innerHTML += str;
        }
        counter = 0;
    }
}

function getIntent(intentName){
    $.ajax({
        type: 'POST',
        url: '/intent',
        data: 
        {
            name: intentName
        }, 
        success: async function(lexData, status){;
            lexData = JSON.parse(lexData);
            console.log(lexData);
            formatNext(lexData);
            renderIntent(lexData);
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
        }
    });
}

function formatNext(lexData){
    newIntent = lexData;
    delete newIntent.createdDate;
    delete newIntent.version;
    delete newIntent.lastUpdatedDate;
    newIntent.conclusionStatement.messages.forEach((elem) => {
        if(elem.groupNumber == null){
            elem.groupNumber = 1;
        }
    });
    newIntent.conclusionStatement.responseCard =  ' ';
}

function publishAllChanges(){
    $.ajax({
        type: 'GET',
        url: '/publishBot', 
        success: async function(res, status){;
            location.reload();
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
            alert('Error updating Lexicon, please try again later');
        }
    });
}

getIntent(findGetParameter('name'));