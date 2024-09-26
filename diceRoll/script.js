const rollBtn = document.getElementById("roll-btn")
const diceIcon =  document.getElementById("dice")
const rollHistory = document.getElementById("roll-history")
let historyList = []

rollBtn.addEventListener('click', ()=>{
    diceIcon.classList.add("roll-animation") //dodaje klasu roll animation iz css na element diceicon
    setTimeout(()=>{
        diceIcon.classList.remove("roll-animation")  //posle 1s brise dodatu klasu
    },1000)
    rollDice()
})

function rollDice(){
    const diceNum =  Math.floor(Math.random() * 6) + 1
    const diceFace = getDiceFace(diceNum)
    diceIcon.innerHTML = diceFace
    historyList.push(diceNum)
    updateHistory()
}

function getDiceFace(diceNum){
    switch(diceNum){
        case 1: return "&#9856;"
        case 2: return "&#9857;"
        case 3: return "&#9858;"
        case 4: return "&#9859;"
        case 5: return "&#9860;"
        case 6: return "&#9861;"
        default: return ""
    }
}

function updateHistory(){
    rollHistory.innerHTML = ""
    for(i=0; i<historyList.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span>`
        rollHistory.appendChild(listItem)
    }
}