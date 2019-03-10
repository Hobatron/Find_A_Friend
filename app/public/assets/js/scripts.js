var localSurveyJSON = $.get('assets/survey.json', data => {
    loadModel(data);
})
Survey.Survey.cssType = "bootstrap";

function sendDataToServer(survey) {
    $.ajax({
        type: "POST",
        url: '/api/results',
        data: survey.data,
    }).then(results => {
        loadReultsView(results, survey.data)
    })
}

function loadModel(data) {
    var survey = new Survey.Model(data);
    $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer
    });
}

function loadReultsView(match, user) {
    //HTML INJECTION FOR RESULTS
    var answerText = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    console.log(match, user);
    var survey = $('#surveyContainer');
    survey.empty();
    survey.text('Thank you for completing the survey, here\'s your new friend!');
    $('#newFriend').css('display', 'block')
    $('#friendsName').text(match.userName);
    var pageNum = 0;
    var qnaItt = 0;

    for (var i in user) {
        //So we can find the question text
        if (i != 'userName') {
            row = $('<div id="question" class="row">');
            theirACol = $('<div id="ta' + i + 'c">');
            theirACol.append($('<div id="ta' + i + 't">')
                .text(answerText[match[i].values - 1]));

            row.append(theirACol);

            //I'm sorry for this mess... This is how I center the question  
            row.append($('<div class="col-8 d-flex justify-content-center">')
                .append($('<span class="align-self-center">')
                    .text(localSurveyJSON.responseJSON.pages[pageNum].elements[qnaItt].title)));

            yourACol = $('<div id="ya' + i + 'c">');
            yourACol.append($('<div id="ya' + i + 't">')
                .text(answerText[user[i].values - 1]));

            row.append(yourACol);

            $('#newFriend').append(row);

            //If the text in the answer is long or short(agree vs strongly disagree)
            addClasses(i, Math.abs(match[i].values - user[i].values))
            if (qnaItt == 4) {
                qnaItt = 0;
                pageNum++
            } else {
                qnaItt++
            };
        };
    };


};



function addClasses(i, absAnswerDiffrencesForCSSColoring) {
    //BOOTSTRAP STYLING FOR LONG AND SHORT ANSWERS - THANKS BOOTSTRAP >:|
    ta = $('#ta' + i + 't');
    ya = $('#ya' + i + 't');

    console.log(ya.text())
    var answerClasses = {
        long: ['col-2 d-flex align-items-center', 'text-center'],
        short: ['col-2 d-flex justify-content-center', 'align-self-center']
    };
    //Will refactor this later. https://soundcloud.com/espen-sande-larsen-365984601/refactor
    if (ya.text() == 'Strongly Agree' || ya.text() == 'Strongly Disagree') {
        ya.parent().addClass(answerClasses.long[0])
        ya.addClass(answerClasses.long[1]);
    } else {
        ya.parent().addClass(answerClasses.short[0]);
        ya.addClass(answerClasses.short[1]);
    };
    if (ta.text() == 'Strongly Agree' || ta.text() == 'Strongly Disagree') {

        ta.parent().addClass(answerClasses.long[0]);
        ta.addClass(answerClasses.long[1]);
    } else {
        ta.parent().addClass(answerClasses.short[0]);
        ta.addClass(answerClasses.short[1]);
    };
    switch (absAnswerDiffrencesForCSSColoring) {
        case 0:
            colorizeBG('bg-success')
            break;
        case 1:
            colorizeBG('bg-closeAnswer')
            break;
        case 2:
            colorizeBG('bg-warning');
            break
        case 3:
            colorizeBG('bg-almostDanger');
            break
        case 4:
            colorizeBG('bg-danger');
    };

    function colorizeBG(backGroundColor) {
        ta.parent().addClass(backGroundColor)
        ya.parent().addClass(backGroundColor)
    }

}


//Uncomment this code to skip the survey with default answers (NOTE:Restarting the server generates a new database of users[suggested rather than saving a static JSON db from D. Vu])

var survey = {}

survey.data = {
    question1: {
        values: "5",
        text: "Strongly Agree"
    },
    question2: {
        values: "4",
        text: "Agree"
    },
    question3: {
        values: "3",
        text: "Neutral"
    },
    question4: {
        values: "4",
        text: "Agree"
    },
    question5: {
        values: "3",
        text: "Neutral"
    },
    question6: {
        values: "4",
        text: "Agree"
    },
    question7: {
        values: "3",
        text: "Neutral"
    },
    question8: {
        values: "4",
        text: "Agree"
    },
    question9: {
        values: "4",
        text: "Agree"
    },
    question10: {
        values: "4",
        text: "Agree"
    },
    question11: {
        values: "3",
        text: "Neutral"
    },
    question12: {
        values: "4",
        text: "Agree"
    },
    question13: {
        values: "3",
        text: "Neutral"
    },
    question14: {
        values: "4",
        text: "Agree"
    },
    question15: {
        values: "4",
        text: "Agree"
    },
    question16: {
        values: "4",
        text: "Agree"
    },
    question17: {
        values: "4",
        text: "Agree"
    },
    question18: {
        values: "4",
        text: "Agree"
    },
    question19: {
        values: "4",
        text: "Agree"
    },
    question20: {
        values: "4",
        text: "Agree"
    },
    userName: "Tani"
}

sendDataToServer(survey)