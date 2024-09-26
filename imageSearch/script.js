const apiKey = 'mxoAyDKD15topfcHSwI2A-YHshHksYLshrK8XvCpkgM'

const formElement = document.querySelector('form')
const searchInput = document.getElementById('input-search')
const searchBtn = document.getElementById('search')
const searchResultsDiv = document.querySelector('.search-results')
const showMoreBtn = document.getElementById('show-more')
let inputData = ''
let page = 1

async function searchImages(){
     
    inputData = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`
    const response = await fetch(url)
    const data =  await response.json()
    console.log(data)
    
    if(page===1){
        searchResultsDiv.innerHTML = ''  //samo privremeno, pokazivace se slike na osnovu search posle
    }

    const results = data.results  //results je niz iz apija od samo 10 rezultata bez ostalih info
    results.map((result)=>{      //prolazi kroz niz results i smesta svaki element u result prom a onda za svaki radi sledece

        const imageWrapper = document.createElement("div")  //kreira novi div za slike iz rezultata
        imageWrapper.classList.add('search-result')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink =  document.createElement('a')
        imageLink.href =  result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)      //dodaje u divove za rezultate slike
        imageWrapper.appendChild(imageLink)

        searchResultsDiv.appendChild(imageWrapper)   //dodaje sve u glavni div 

    })

    page++   //povecava broj stranice nakon prvog search
    
    
    if(page > 1){
        showMoreBtn.style.display = 'block'   
    }


    

}

formElement.addEventListener('submit', (event)=>{

    event.preventDefault()
    page = 1
    searchImages()

})

showMoreBtn.addEventListener('click', ()=>{
    searchImages()
})

