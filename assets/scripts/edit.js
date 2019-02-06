var editing = false;

function editUtterance(index){
    if(!editing)
    {
        editing = true;
        let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.sampleUtterances[index] + '">';
        bigStr += '<input type="button" onclick="putUtterance(' + index + ')" value="Submit">';
        document.getElementById(newIntent.sampleUtterances[index]).innerHTML = bigStr;
    }
}

function editResponse(index){
    if(!editing)
    {
        editing = true;
        let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.conclusionStatement.messages[index].content + '">';
        bigStr += '<input type="button" onclick="putResponse(' + index + ')" value="Submit">';
        let domStr = 'editResponse' + index;
        document.getElementById(domStr).innerHTML = bigStr;
    }
}

function putUtterance(index){
    newIntent.sampleUtterances[index] = document.getElementById("editIntentField").value;
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
            try{
                getIntent(JSON.parse(lexData).name);
            }
            catch(err){
                console.log('Error updating Lexicon, please try again later');
            }
            editing = false;
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
        }
    });
}