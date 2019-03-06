module.exports = function (newUser, db) {
    delete newUser.userName
    var currentBestMatch = [999, ''];
    for (var i in db) {
        var score = 0;
        for (var j in newUser.surveyAnswers) {
            oldUserAnswer = db[i][j].values;
            newUserAnswer = newUser.surveyAnswers[j].values;
            if (newUserAnswer - oldUserAnswer == 0) {
                score -= 3;
            } else {
                score += Math.abs(newUserAnswer - oldUserAnswer) * 2;
            }
        }
        if (score < currentBestMatch[0]) {
            currentBestMatch[0] = score;
            currentBestMatch[1] = db[i];
        }
    }
    return currentBestMatch;
}