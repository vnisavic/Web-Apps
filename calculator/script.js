const buttonsEl = document.querySelectorAll("button") 
const inputEl =  document.getElementById("result")

for(let i=0; i<buttonsEl.length; i++){
    
    buttonsEl[i].addEventListener("click", ()=>{
        const btnValue = buttonsEl[i].textContent
        if(btnValue === 'C'){
            clearResult()
        }
        else if(btnValue === '='){
            calculateResult()
        }
        else{
            appendValue(btnValue)
        }
    })
}

function clearResult(){
    inputEl.value = ''
}

function calculateResult(){
    inputEl.value = eval(inputEl.value).toFixed(5)   //eval fja gleda na string kao na js kod i automatski racuna//
}

function appendValue(btnValue){
    inputEl.value += btnValue    //+= dodaje broj na broj //
}