/* Multiplication Quiz
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */
main();

function main(){
    let score = askFive();
    if (score == 0) alert(" perfect");
    else alert(" you got " + score + " out of 5 wrong");
}

/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: score (0-5)
 */
function askFive(){
    let score = 0;
    for (let question =1; question<= 5; question++){
        score += askQuestion(question);
    }
    return score;   
}

/* STAGE 1:ASK A QUESTION */
/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
    let wrong = 0;
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a*b;
    let equation =  question + " : what is " + a + " * " + b + "?";
    let answer = 0;
    while (answer != product && answer != "q"){
        answer = prompt(equation);
        if (answer == "q"){
            alert("quitter");
            wrong = 2;
        }
        else if (answer == product){
            alert("correct");
        }
        else {
            alert("incorrect try again");
            wrong = 1;
        } 
      }
    return wrong;
 }

/* TEST BEFORE CONTINUING TO STAGE THREE! */

/* STAGE 3!!: MULTIPLE TRIES (CHALLENGE!) */ 

/* Refactor askQuestion per whileQuestions askFive calls askQuestion five times, counting and returning number wrong
 * Use the whileQuestions tab in the flowchart to guide you. 
 * @param: none
 * @return: score (0-5)
 */
 