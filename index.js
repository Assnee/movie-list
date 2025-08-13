
  let inputPlace =document.getElementById("searchbody")
let mainSpace = document.getElementById("main")
  let search =document.getElementById("search-btn") 
  let arrayWatchlist =[]
document.addEventListener("click",function(e){
  e.preventDefault()
  if(e.target.classList.contains('search-btn')){
     render()
     
  }
  if(e.target.dataset.id){
 arrayWatchlist.push(e.target.dataset.id)
  console.log(arrayWatchlist)
  localStorage.setItem('id',JSON.stringify(arrayWatchlist))
  console.log(localStorage.getItem('id'))
  }
  if(e.target.classList.contains('remove-btn')){

  }
  if(e.target.classList.contains('moviesearch')){
    console.log(`yes`)
    window.location.replace("http://127.0.0.1:5500/watch.html")

  }
  
  
  

})



async function display(searchinput){
  try{
    const response1= await fetch(`http://www.omdbapi.com/?apikey=2f0fb166&s=${searchinput}`)
    if(!response1.ok){
      throw new Error("somehting went wrong")
    }
    const data = await response1.json() 
    return data

    }catch(err){
      console.log(err)
    }
  }



async function display2(id){

      try{
        const response2= await fetch(`http://www.omdbapi.com/?apikey=2f0fb166&i=${id}`)
        if(!response2.ok){
          throw new Error("somehting went wrong")
        }
        const result = await response2.json()
        return result
      }catch(err){
        console.log(err)
      }
    }
    
    let paragraph=''
      
    // implement reponse if or elese statement in the destructuring of the object searched
    async function render(){
   let place=""
      const data = await display(inputPlace.value)
      
      const searching = data.Search
      searching.forEach(async(searched)=>{
        const {Title ,imdbID}= searched
      const result = await display2(imdbID)
      const{imdbRating,Poster,Genre,Plot,Runtime} = result
    
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
      <label   id="watchlist-text"class="watchlist-text">add to Watchlist</label>
      <input type="button" id="watchlist-btn" class="watchlist-btn" value='+'data-id='${imdbID}'>
      </div>
      <p id="p-plot"class="p-plot">${Plot}</p>
      </div>
      
      </div>`
      mainSpace.innerHTML= place
    })

 }   
  
    
   

  // document.getElementById("displaymain").innerHTML=place2
  //   document.getElementById("container").innerHTML+=place1
// place1+=`<div class="display" id="display">
        
        
        
//         <p id="p-runtime" class="p-runtime">${name.Runtime}</p>
//         <p id="p-genre"class="p-genre">${name.Genre}</p>
//         <p id="p-plot"class="p-plot">${name.Plot}</p>
//         <img src="icon.png" alt="star" id="star" class="star">    <p id="p-rating"class="p-rating">${att.value}</p>
        
//         </div>
// data.Search.forEach(async function(grade){
//       place2+=`<div class=""movieDisplay" id="movieDisplay">
//       <img src="${grade.Poster}" alt="poster"id="poster"class="poster">
//       <button id="watchlist-btn" class="watchlist-btn">+</button>
//       <p id="watchlist-text"class="watchlist-text">Watchlist</p>
      
//       <h2 id="bigtitle-data"class="bigtitle-data">${grade.Title}</h2>
      
//       </div>`
// function displa(){

//   fetch(`http://www.omdbapi.com/?apikey=2f0fb166&=${inputPlace.value}`)
//   .then(response=>response.json())
//   .then(data=>{console.log(data)
//     data.Ratings.forEach(function(grade){
//       mainSpace.innerHTML+=`<div class=""movieDisplay" id="movieDisplay">
//       <img src="${data.Poster}" alt="poster"id="poster"class="poster">
//       <button id="watchlist-btn" class="watchlist-btn">+</button>
//       <p id="watchlist-text"class="watchlist-text">Watchlist</p>
      
//       <h2 id="bigtitle-data"class="bigtitle-data">${data.Title}</h2>
//       <p id="p-runtime" class="p-runtime">${data.Runtime}</p>
//       <p id="p-genre"class="p-genre">${data.Genre}</p>
//       <p id="p-plot"class="p-plot">${data.Plot}</p>
//       <img src="icon.png" alt="star" id="star" class="star">
//       <p id="p-rating"class="p-rating">${grade.value}</p>
//       </div>`
//       inputPlace.value = " "
//     })})}