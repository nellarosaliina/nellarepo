// Quiz game 


const startGame = prompt("Do you want to start the game? ");

var score = 0;

var questions = [
    {
        prompt: "What color is the sky?\n(a) Blue\n\(b) Black\n(c) Yellow",
        answer: "a"
    },
    {
        prompt: "Is Node.js a coding language?\n(a) Yes?\n\
        (b) No",
        answer: "b"
    }
];


for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);{
        if(response == questions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!")
        }
    }
    alert("You got " + score + "/" + questions.length);

}