let secretNum = Math.floor(Math.random() * 21)
const input = document.querySelector(".input")
const btnCheck = document.querySelector(".btn-2")
const message = document.querySelector(".message")
const showSecretNum = document.querySelector(".secret-num")
const scoreEl = document.querySelector(".score span")
const highScore = document.querySelector(".h-score span")
const btnAgain = document.querySelector(".btn-1")

let score = 20;
let hscore = 0;
isplaying = true

btnCheck.addEventListener('click', function () {
    //1.Read input value from input element
    const inputValue = input.value
    //2.Compare it with secret number
    if (inputValue == secretNum) {
        message.textContent = "You win"
        showSecretNum.textContent = secretNum
        if (hscore < score) {
            highScore.textContent = score
        }
        else {
            highScore.textContent = hscore
        }
    } else if (inputValue > secretNum) {
        message.textContent = "Too high.."
        score--
        scoreEl.textContent = score
    } else {
        message.textContent = "Too low.."
        score--
        scoreEl.textContent = score
    }
})

btnAgain.addEventListener('click', function () {
    message.textContent = "Start Guessing..."
    secretNum=Math.floor(Math.random() * 21)
    document.querySelector(".score span").textContent=20
    showSecretNum.textContent = "?"

})