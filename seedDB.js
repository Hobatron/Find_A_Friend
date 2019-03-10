module.exports = function createDB() {
    var faker = require('faker')
    var numberOfUsersToGen = 30000;
    var numberOfQuestions = 20;
    var database = [];
    for (var i = 0; i < numberOfUsersToGen; i++) {

        tempUserObj = {}
        tempUserObj.userName = faker.name.findName();
        for (var j = 1; j < numberOfQuestions + 1; j++) {
            tempUserObj['question' + j] = {
                values: Math.floor(Math.random() * 5) + 1
            };
        }
        database.push(tempUserObj);
    }
    console.log("Randomly generated " + database.length + " new users");
    return database;
}