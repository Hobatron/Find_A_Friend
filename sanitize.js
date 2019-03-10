module.exports = function (nameAndQuestions) {
    for (var i in nameAndQuestions) {
        if (i != 'userName') {
            delete nameAndQuestions[i].text;
        } else {
            temp = nameAndQuestions[i];
            delete nameAndQuestions.userName;
            var sanitizedObj = {
                "userName": temp,
                "surveyAnswers": nameAndQuestions
            }
        }
    }
    return sanitizedObj;
}