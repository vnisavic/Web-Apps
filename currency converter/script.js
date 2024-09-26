const firstCurr = document.getElementById("currency-first")
const inputFirst = document.getElementById("input-first")
const seconCurr = document.getElementById("currency-second")
const inputSecond = document.getElementById("input-second")
const excangeRate = document.getElementById("excange-rate")

calculateRate()

function calculateRate(){
   
   fetch(`https://v6.exchangerate-api.com/v6/571dd020e8bb3ec6dbfb9038/latest/${firstCurr.value}`).then((response)=>
   response.json()).then((data)=>{
   const rate = data.conversion_rates[seconCurr.value]
   excangeRate.innerText = `1 ${firstCurr.value} = ${rate + " " + seconCurr.value}`   //text za ex rate 
   inputSecond.value = (inputFirst.value * rate).toFixed(2)
   }
   )
   //fetchuje api,sa dinam prom koja je selektovana valuta, zatim u resposne smesta odgovor koji se konvertuje u json//
   //a onda u rate smesta podatke iz data tj kurs dobijen iz apija za selektovanu valutu za razmenu//
                                                                                                                                                    
}

firstCurr.addEventListener("change", calculateRate)    // na bilo koju promenu u selectu pozovi fju
seconCurr.addEventListener("change",calculateRate)
inputFirst.addEventListener("input",calculateRate)

