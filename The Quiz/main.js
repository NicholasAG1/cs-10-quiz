// event listeners 
document.getElementById('markQuiz').addEventListener("click", mark)

// Variables

let numOfCorrect = 0;


// Functions 

function mark() {
    let AQ1 = document.getElementById('AnswerQ1').value.toLowerCase();
    let AQ2 = document.getElementById('AnswerQ2').value.toLowerCase();
    let AQ3 = document.getElementById('AnswerQ3').value.toLowerCase();
    let AQ4 = document.getElementById('AnswerQ4').value.toLowerCase();
    Q1(AQ1)
    Q2(AQ2)
    Q3(AQ3)
    Q4(AQ4)
    document.getElementById('score').innerHTML = '' + numOfCorrect + '/5'; 
}

// check if answers correct

function Q1(Answer) {
    console.log(Answer)
    if (Answer == "ian malcome") {
        numOfCorrect++
        document.getElementById('Q1').innerHTML = 'Correct';
    }else {
        document.getElementById('Q1').innerHTML = 'Incorrect';
    }
}

function Q2(Answer) {
    if (Answer == "voldemort") {
        numOfCorrect++
        document.getElementById('Q2').innerHTML = 'Correct';
    }else {
        document.getElementById('Q2').innerHTML = 'Incorrect';
    }
}

function Q3(Answer) {
    if (Answer == "darth vader") {
        numOfCorrect++
        document.getElementById('Q3').innerHTML = 'Correct';
    }else {
        document.getElementById('Q3').innerHTML = 'Incorrect';
    }
}

function Q4(Answer) {
    if (Answer == "harrison ford") {
        numOfCorrect++
        document.getElementById('Q4').innerHTML = 'Correct';
    }else {
        document.getElementById('Q4').innerHTML = 'Incorrect';
    }
}
