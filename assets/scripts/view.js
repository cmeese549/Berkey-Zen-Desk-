var newIntent = {};

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
        let str = '<li id="' + elem + '"><span onclick="editUtterance(' + lexData.sampleUtterances.indexOf(elem) + ')">' + elem + '</span></li>';
        bigStr += str;
    });
    document.getElementById('utterances').innerHTML = bigStr;
    bigStr = '';
    for(let i = 1; i <= lexData.conclusionStatement.messages[lexData.conclusionStatement.messages.length - 1].groupNumber; i++){
        let str = 'Message Group ' + i + ':<ol id="messageGroup' + i + '"></ol>';
        bigStr += str;
    }
    document.getElementById('response').innerHTML = bigStr;
    lexData.conclusionStatement.messages.forEach((elem) => {
        let domStr = 'messageGroup' + elem.groupNumber;
        let str = '<li id="editResponse' + lexData.conclusionStatement.messages.indexOf(elem) + '">';
        str += '<span onclick="editResponse(' + lexData.conclusionStatement.messages.indexOf(elem) + ')">' + elem.content + '</span></li>';
        document.getElementById(domStr).innerHTML += str;
    });
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
    newIntent.conclusionStatement.responseCard = false;
}

getIntent(findGetParameter('name'));