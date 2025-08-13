
let mainSpace = document.getElementById("main")
let arrayWatchlist =JSON.parse(localStorage.getItem('id'))||[]
const localStorageContent = JSON.parse(localStorage.getItem('id'))
document.addEventListener("click",function(e){
  if(e.target.dataset.id){
    
    const stock =e.target.dataset.id
    const index = arrayWatchlist.indexOf(stock)
  
      arrayWatchlist.splice(index,1)
    localStorage.setItem('id',JSON.stringify(arrayWatchlist))
    console.log(localStorageContent)
   location.reload()
    Render2()
  } 
})
Render2()
function Render2(){
  let place =''

  localStorageContent.forEach(async function(suit){
    const response3 = await fetch(`http://www.omdbapi.com/?apikey=2f0fb166&i=${suit}`)
    const data =  await response3.json()
    console.log(data)
    
    const{imdbRating,Poster,Genre,Plot,Runtime,Title,imdbID} = data
    place+=`<div class="movieDisplay" id="movieDisplay">
    <img src="${Poster}" alt="poster of${Title}"id="poster"class="poster">
    <div class="movieDisplay1" id="movieDisplay1">
    <div class="movieDisplay2" id="movieDisplay2">
    <h2 id="bigtitle-data"class="bigtitle-data">${Title}</h2>
    <p id="p-rating"class="p-rating">${imdbRating}</p>
    <img src="star.png" alt="star" id="star" class="star">
    </div>
    <div class="movieDisplay3" id="movieDisplay3">
    <p id="p-runtime" class="p-runtime">${Runtime}</p>
    <p id="p-genre"class="p-genre">${Genre}</p>
    <label   id="watchlist-text"class="watchlist-text">remove</label>
    <input type="button" id="watchlist-btn" class="watchlist-btn" value='-' data-id='${imdbID}'>
    </div>
    <p id="p-plot"class="p-plot">${Plot}</p>
    </div>
    
    </div>`
    mainSpace.innerHTML= place
  })
}
// const localStorageContent = localStorage.getItem("names")
// let names;
// names.push(localStorage.getItem('id'))
// function addId(names){
// localStorage.setItem("names",JSON.stringify(tweets))
//     if(localStorageContent === null){
        
//         names =[] 
//     }
//     else{
//         names = JSON.parse(localStorageContent)
        
//     }
//     return names

// fetch
//   const searching = data.Search
//       searching.forEach(async(searched)=>{
//         const {Title ,imdbID}= searched
//       const result = await display2(imdbID)
//       const{imdbRating,Poster,Genre,Plot,Runtime} = result
    
//       place+=`<div class="movieDisplay" id="movieDisplay">
//       <img src="${Poster}" alt="poster of${Title}"id="poster"class="poster">
//       <div class="movieDisplay1" id="movieDisplay1">
//       <div class="movieDisplay2" id="movieDisplay2">
//       <h2 id="bigtitle-data"class="bigtitle-data">${Title}</h2>
//       <p id="p-rating"class="p-rating">${imdbRating}</p>
//       <img src="star.png" alt="star" id="star" class="star">
//       </div>
//       <div class="movieDisplay3" id="movieDisplay3">
//       <p id="p-runtime" class="p-runtime">${Runtime}</p>
//       <p id="p-genre"class="p-genre">${Genre}</p>
//       <label   id="watchlist-text"class="watchlist-text">add to Watchlist</label>
//       <input type="button" id="watchlist-btn" class="watchlist-btn" value='+'data-id='${imdbID}'>
//       </div>
//       <p id="p-plot"class="p-plot">${Plot}</p>
//       </div>
      
//       </div>`
//       mainSpace.innerHTML= place