console.log("Test")
$.get('assets/survey.json', data => {
    loadModel(data);
})
Survey.Survey.cssType = "bootstrap";
console.log(Survey)

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

function loadModel(surveyJSON) {
    var survey = new Survey.Model(surveyJSON);
    $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer
    });
}