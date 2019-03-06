console.log("Test")
$.get('assets/survey.json', data => {
    loadModel(data);
})
Survey.Survey.cssType = "bootstrap";

function sendDataToServer(survey) {
    $.ajax({
        type: "POST",
        url: '/api/results',
        data: survey.data,
        success: function () {
            console.log('data sent: ' + survey.data);
        },
    });
}

function loadModel(surveyJSON) {
    var survey = new Survey.Model(surveyJSON);
    $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer
    });
}