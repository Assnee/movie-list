console.log('hello world')
let store =[] 
const statuss = localStorage.getItem('id')
store.push(statuss)
console.log(store)
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
//     })