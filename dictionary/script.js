const inputEl = document.getElementById("input") 
const infoTxt = document.getElementById("info-text")
const meaningCont = document.getElementById("meaning-container")
const wordTitle = document.getElementById("title")
const wordMeaning = document.getElementById("meaning")
const audioEl=document.getElementById('audio')

inputEl.addEventListener("keyup",(e)=>{             //event listener za pritisnuto dugme, poziva funkciju koja vraca dugme kroz promenljivu e
//console.log(e.key) //                                 //ispisi u konzoli koje je dugme pritisnuto, e.key za enter, backspace i to, e.target.value za slova i brojeve
if(e.target.value && e.key ==='Enter'){                  //ako je vrednost i dugme pritisnuto enter, pozovi f-ju
    fetchApi(e.target.value)                           //pozivanje funkcije koja vraca rec koja je upisana u input polje
}
})

async function fetchApi(word){
    try {

     //console.log(word)  //                                                   //f-ja vraca word u konzolu, gore u ifu word se odnoosi na argument odnosno input u polju
     infoTxt.style.display='block'                                             //vraca searching text
     meaningCont.style.display='none'                                           //sklanja mening block dok se trazi rec
     infoTxt.innerText=`Searching for the defintion of the word "${word}"`     //dok se ceka api, umesto type a word ispisuje se ovaj text
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`       //dinamicka promenljiva je za upisanu rec
    const result = await fetch(url).then((res)=> res.json())                  //poziva api, fetch znaci da uzme podatke sa url-a a onda smesti u prom respone i istu konvertuje u json, smesta sve to u result
    console.log(result)                                                      //ispisi u konzoli rezultat
    wordTitle.innerText=result[0].word                                       //inner text polja title postaje prva rec u nizu result
    wordMeaning.innerText=result[0].meanings[0].definitions[0].definition    //iner text polja meaning postaje isto, samo iz hmtl apija se izvlace ostali el za niz
    audioEl.src=result[0].phonetics[0].audio                                 //isto za audio
    infoTxt.style.display='none'                                             //nakon sto rezultat dodje brise se searching for a word text
    meaningCont.style.display='block'                                        //vraca 

    } catch (error) {
        infoTxt.innerText='There is an error or the word does not exist!'
    }
    
}