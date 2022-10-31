let secretNum = Math.floor(Math.random() * 20+1)
const input = document.querySelector(".input")
const checkBtn = document.querySelector(".btn-2")
const message = document.querySelector(".message")
const scoreEl = document.querySelector(".score span")
const hScoreEl = document.querySelector(".h-score span")
const againBtn = document.querySelector(".btn-1")
const showSecretNum = document.querySelector(".secret-num")

let score = 20
let hscore = 0

checkBtn.addEventListener('click', function () {
    const inputValue = input.value
    if (inputValue == secretNum) {
        message.textContent = "You Won the Game"
        showSecretNum.textContent = inputValue
        if(hscore<score){
            hscore=score
            hScoreEl.textContent= hscore
           
        }
        
    }
    else if (inputValue < secretNum) {
        message.textContent = "Your Number is too Low"
        score--
        scoreEl.textContent = score
    }
    else {
        message.textContent = "Your Number is too High"
        score--
        scoreEl.textContent = score
        }

})

againBtn.addEventListener('click',function(){
    showSecretNum.textContent ="?"
    message.textContent="Start Guessing..."
    secretNum = Math.floor(Math.random() * 20+1)
    document.querySelector(".score span").textContent = 20
    score=20
})