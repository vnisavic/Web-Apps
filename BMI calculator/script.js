const btnEL = document.getElementById('btn')
const heInput = document.getElementById('height')
const weInput = document.getElementById('weight')
const result = document.getElementById('result')
const condition = document.getElementById('weight-condition')


function calculateBMI(){

   const currHeight = heInput.value
   const currWeight = weInput.value
   
   var bmiNum = currWeight/Math.pow((currHeight/100), 2)
   bmiNum = bmiNum.toFixed(1)
   result.value = bmiNum
   
   if(bmiNum<18.5){
    condition.innerText = ' Underweight'
   } 
   else if (bmiNum>=18.5 && bmiNum<=24.9){
    condition.innerText = ' Healthy range'
   } 
   else if (bmiNum>=25 && bmiNum<=29.9){
    condition.innerText = ' Overweight'
   } 
   else if (bmiNum>=30){
    condition.innerText = ' Obese'
   }


}

btnEL.addEventListener('click', calculateBMI)