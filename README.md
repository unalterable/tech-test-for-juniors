# Task:
Your job is to write an implementation of `notifyOfExamResults` in `./index.js`. 

Data (`scores` & `emails`) has been imported from `./data.js`. You should study it and use it but do not edit it.

A `sendEmail` function has been imported from `./emailer.js`. Use it to send emails. DO NOT SEND REAL EMAILS. It takes an email address and an email body, and will return `true` if the email was sent successfully and `false` if not. 
```javascript
const wasSuccessful = sendEmail('email@address.com', 'Email Body Here');
```

## Requirements:
- Students who have received an average score of above 50% should be sent: `"Congratulations {STUDENT_NAME}, you passed your exams with {AVERAGE_SCORE}%!"`
- Students who fail should be sent: `"Bad luck {STUDENT_NAME}, you failed your exams with {AVERAGE_SCORE}%."`
- `notifyOfExamResults` should return an array of all email addresses to which an email was not sent successfully.

## Tests:
Your solution should pass all the tests. `npm install` will install dependencies, and `npm test` will run the tests.
