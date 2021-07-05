var quiz = [
    {
        numb: 1,
        question: "What is the name of Sholay' s iconic villain?",
        options: ["Kalia", "Shakaal", "Gabbar Singh", "Bulla"],
        answer: "Gabbar Singh"
    },
    {
        numb: 2,
        question: "What is the name of the lead female character in Dilwale Dulhania Le Jayenge?",
        options: ["Senorita", "Simran", "Sunita", "Pooja"],
        answer: "Simran"
    },
    {
        numb: 3,
        question: "Finish the quote from Deewar: 'Mere paas _____.'",
        options: ["Baap hai", "Behen hai", "Maa hai", "Paisa hai"],
        answer: "Maa hai"
    },
    {
        numb: 4,
        question: "What is the name of the National-award winning Bollywood choreographer, who recently passed away?",
        options: ["Saroj Khan", "Protik Prakash", "Tridib Ghosh", "Geetha Nagabhushan"],
        answer: "Saroj Khan"
    },
    {
        numb: 5,
        question: "What is a 'Masala movie'?",
        options: ["A movie about revenge", "A movie which is sponsored by 'MDH Masala'", "A movie which is a mixture of action, comedy, romance and melodrama", "A movie about spice"],
        answer: "A movie which is a mixture of action, comedy, romance and melodrama"
    }
];
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    next_btn.classList.remove("show");
}

quit_quiz.onclick = () => {
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = () => {
    if (que_count < quiz.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        next_btn.classList.remove("show");
    } else {
        showResult();
    }
}

function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + quiz[index].numb + ". " + quiz[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + quiz[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + quiz[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + quiz[index].options[2] + '</span></div>' +
        '<div class="option"><span>' + quiz[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (i = 0 ; i < option.length ; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = quiz[que_count].answer;
    const allOptions = option_list.children.length;
    if (userAns === correctAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    } 
    else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        for (i = 0 ; i < allOptions ; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>You have scored : <p>' + userScore + '</p> out of <p>' + quiz.length + '</p></span>';
    scoreText.innerHTML = scoreTag;
}

function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + quiz.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}