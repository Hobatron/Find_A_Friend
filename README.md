# Find_A_Friend

To install & run:
    1. git clone git@github.com:Hobatron/Find_A_Friend.git
    2. cd Find_A_Friend
    3. npm i
    4. node server.js
    5. Navigate to localhost:8080
    6. Should state: 'Randomly generated x new users', 'App listening on PORT 8080'

This site is designed to showcase a simple matching algorithm based on 20 questions.

To add questions:
    1. Review & edit /app/public/assets/js/survey.js
    2. Edit /seedDB.js an equivalent amount (i.e if you add 2 questions increase numberOfQuestions to '22')

To change value of users generated:
    1. Navigate to /seedDB.js
    2. Edit numberOfUsersToGen to the desired amount (high numbers may cause delays with the server[My pc takes .5s to search through 30k users])