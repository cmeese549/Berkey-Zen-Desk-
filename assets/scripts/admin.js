var nextToken = '';

function getIntents(){
    console.log(nextToken);
    $.ajax({
        type: 'POST',
        url: '/intents',
        data: 
        {
            page: nextToken
        }, 
        success: async function(lexData, status){
            console.log(lexData);
            lexData = JSON.parse(lexData);
            nextToken = lexData.nextToken;
            let bigStr = '';
            lexData.intents.forEach((elem) => {
                bigStr += '<a href="admin/view-intent?name=' + elem.name + '"><h3>' + elem.name + '</h3></a>';
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