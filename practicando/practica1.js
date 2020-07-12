var questions = [
    "what is your name",
    "what do you want to drink",
    "anything else",
    "how can i get you?"

];
var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`>`);
};

process.stdin.on('data', function(data) {
   answers.push(data.toString().trim());
     if (answers.length < questions.length) {
         ask(answers.length);
    
    }else {
         process.exit();
     }
});

process.on('exit',function(){
    process.stdout.write("\n\n\n\n")
    process.stdout.write(`thanks ${answers[0]} your ${answers[1]} will be in a moment`);
    process.stdout.write("\n\n\n\n")
});
ask(0);