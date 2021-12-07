var cases = require ("readline-sync");
var username = cases.question("what is your name?    ");
console.log("welcome ",username,"puja's quiz app...");
var mark=0;
function play(answer){
    if (answer < 0){
        mark=mark+1
        console.log("you are right and your mark is ",mark)
    }
    else if (answer % 2 === 0){
        mark=mark+1
        console.log("you are right and your mark is ",mark)
    }
    else if (answer===" BBSR"){
        mark=mark+1
        console.log("you are right and your mark is ",mark)
    }
}
play(cases.question("Give a negative number :"));
play(cases.question("give a even number : "));
play(cases.question(" capital of odisha "));
if (mark < 2){
    Break
}else{
    console.log("Successfully passed level-1")
    console.log("Welcome to level-2")
    var mark1 = 0;
    function play1(answer1){
        if (answer1 > 0){
            mark=mark+1
            console.log("you are right and your mark is ",mark)
        }
        else if (answer % 2 === 1){
            mark=mark+1
            console.log("you are right and your mark is ",mark)
        }
        else if (answer === 1947){
            mark=mark+1
            console.log("you are right and your mark is ",mark)
        }
    }
    play1(cases.questionInt("positive number:"));
    play1(cases.question(" Give a odd number :"));
    play1(cases.question(" When India got independence :"));
    


}
