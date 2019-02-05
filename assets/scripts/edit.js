function editUtterance(index){
    let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.sampleUtterances[index] + '">';
    bigStr += '<input type="button" onclick="putUtterance(' + index + ')" value="Submit">';
    document.getElementById(newIntent.sampleUtterances[index]).innerHTML = bigStr;
}

function editResponse(index){
    let bigStr = '<input id="editIntentField" type="text" value="' + newIntent.conclusionStatement.messages[index].content + '">';
    bigStr += '<input type="button" onclick="putResponse(' + index + ')" value="Submit">';
    let domStr = 'editResponse' + index;
    document.getElementById(domStr).innerHTML = bigStr;
}

function putUtterance(index){
    newIntent.sampleUtterances[index] = document.getElementById("editIntentField").value;
    $.ajax({
        type: 'POST',
        url: '/putIntent',
        data: 
        {
            newIntent: newIntent
        }, 
        success: async function(lexData, status){
            getIntent(JSON.parse(lexData).name);
        },
        error:   function(jqXHR, textStatus, errorThrown) {
            console.log("Error, status = " + textStatus + ", " +
                  "error thrown: " + errorThrown
            );
        }
    });
}