var nextToken = '';
var prevToken = '';

function getIntents(direction){
    if(nextToken !== ''){
        prevToken = nextToken;
    }
    let theToken;
    if(direction == 1){
        theToken = nextToken;
    }else{
        theToken = prevToken;
    }
    $.ajax({
        type: 'POST',
        url: '/intents',
        data: 
        {
            page: theToken
        }, 
        success: async function(lexData, status){
            lexData = JSON.parse(lexData);
            nextToken = lexData.nextToken;
            let bigStr = '';
            lexData.intents.forEach((elem) => {
                bigStr += '<a href="/admin/view-intent?name=' + elem.name + '"><h3>' + elem.name + '</h3></a>';
            });
            document.getElementById('intents').innerHTML = bigStr;
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
        }
    });
}