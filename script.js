const startButton = document.getElementById("start-btn")
const questionContainer = document.getElementById("question-container");
const body = document.querySelector("body");
const nextButton = document.getElementById("next-btn");
const questions = [
  {
    question: "What is the square root of 16?",
    answers: [
      { text: "4", correct: true },
      { text: "20", correct: false },
      { text: "2", correct: false },
      { text: "0", correct: false },
    ],
  },
  {
    question: "What is the capital city of kenya?",
    answers: [
      { text: "Mombasa", correct: false },
      { text: "Nairobi", correct: true },
      { text: "Lamu", correct: false },
      { text: "Cape Town", correct: false },
    ],
  },
  {
    question: "Who is the most handsome man in the world?",
    answers: [
      { text: "Kim Taehyung", correct: false },
      { text: "Jensen Ackles", correct: false },
      { text: "Zayn Malik", correct: false },
      { text: "All the above", correct: true },
    ],
  },
  {
    question: "What is the biggest band in the world?",
    answers: [
      { text: "BTS", correct: true },
      { text: "Bangtan Sonyeondan", correct: true },
      { text: "Bulletproof boyscouts", correct: true },
      { text: "Coldplay", correct: false },
    ],
  },
  {
    question: "Are cats cute?",
    answers: [
      { text: "The cutest!", correct: true },
      { text: "Duh", correct: true },
      { text: "No", correct: false },
      { text: "I don't think so", correct: false },
    ],
  },
  {
    question: "What makes you young?",
    answers: [
      { text: "bravery", correct: false },
      { text: "foolishness", correct: false },
      { text: "ng", correct: true },
      { text: "your mindset", correct: true },
    ],
  },
  {
    question: "Are BTS armys funny?",
    answers: [
      { text: "hilarious", correct: true },
      { text: "the funniest", correct: true },
      { text: "Tae was tripping", correct: true },
      { text: "All these options are the same answer", correct: false },
    ],
  },
];

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion)

let seenQuestions = []

function startGame(){
   startButton.classList.add("hide")
  
   questionContainer.classList.remove("hide")
   nextButton.classList.remove("hide");
   setNextQuestion()
}

function setNextQuestion(){
  resetState()
 let seen = Math.floor(Math.random() * 7)
 while(seenQuestions.indexOf(seen) != -1 && (seenQuestions.length <= 7 && seenQuestions.length >= 1)){
     seen = Math.floor(Math.random() * 7)
 }
 seenQuestions.push(seen)
 if(seenQuestions.length == 7){
     alert("Questions are done!")
     location.reload()
 }
 showQuestion(seen)
}

function resetState(){
     let body = document.querySelector("body")
     if(body.classList.contains("right")){
          body.classList.remove("right")
     }else if(body.classList.contains("wrong")){
         body.classList.remove("wrong")
     }
     let questionContainer = document.getElementById("question")
     if(questionContainer.hasChildNodes()){
         questionContainer.removeChild(questionContainer.children[0])
     }
     let answersContainer = document.getElementById("answers")
     while(answersContainer.hasChildNodes()){
         answersContainer.removeChild(answersContainer.firstChild)
     }
}

function showQuestion(index){
    let questionDiv = document.getElementById("question")
    let question = document.createElement("p")
    question.classList.add("q-txt")
    question.innerHTML = questions[index].question
    questionDiv.appendChild(question)
    let answersDiv = document.getElementById("answers")
    questions[index].answers.map( el => {
      let button = document.createElement("button")
      if(el.correct){
          button.dataset.correct = el.correct
      }
      button.classList.add("answer")
      button.innerHTML = el.text
      selectAnswer(button)
      answersDiv.appendChild(button)
    })
}

function selectAnswer( button){
    button.addEventListener("click", (e)=>{

        let correct = e.target.getAttribute("data-correct")
        if(correct){
           let body = document.querySelector("body")
           e.target.classList.add("right")
           body.classList.add("right")   
        }else{
           let buttons = document.querySelectorAll(".answer")
           buttons.forEach( btn =>{
               if(btn.getAttribute("data-correct")){
                   btn.classList.add("right")
               }else{
                   btn.classList.add("wrong")
               }
                let body = document.querySelector("body");
                body.classList.add("wrong");
           })
        }
    })
}

