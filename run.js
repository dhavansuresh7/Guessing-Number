let secretNum = Math.floor(Math.random() *21)
const input = document.querySelector('.input')
const message = document.querySelector('.message')
const highScore = document.querySelector('.h-score1')
const checkBtn = document.querySelector('.btn-2')
const againBtn = document.querySelector('.btn-1')
const score1 = document.querySelector('.score1')
const magicNum = document.querySelector('.secret-num')

console.log(secretNum)

let hscore = 0
let currscore = 20

checkBtn.addEventListener('click', function(){
    const inputValue = input.value
    if(inputValue == secretNum){
        message.textContent = "You Won the game!!!🎉"
        magicNum.textContent = secretNum
        highScore.textContent = currscore
    }
    else if(inputValue > secretNum){
        message.textContent = "Your number is too high 😕"
        currscore -= 1
        score1.textContent = currscore
    }
    else{
        message.textContent = "Your number is too low 😕" 
        currscore -= 1
        score1.textContent = currscore
    }

})

againBtn.addEventListener('click', function(){
    
})