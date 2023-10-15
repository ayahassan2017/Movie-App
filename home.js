// api_key=abd168499066ee6d954113e18c858ccd
// /discover/movie?sort_by=popularity.desc&
 // https://api.themoviedb.org/3/movie/550?api_key=abd168499066ee6d954113e18c858ccd
// img url:https://image.tmdb.org/t/p/w500


 const apiKey ="api_key=abd168499066ee6d954113e18c858ccd";

 const path ="/discover/movie?sort_by=popularity.desc&";

 const url ="https://api.themoviedb.org/3";

 const imgUrl ="https://image.tmdb.org/t/p/w500";


 const apiUrl = url + path + apiKey;
 const main = document.getElementById("main");

 getMovies(apiUrl);
 function getMovies(url){
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        showMovie(data.results)
        // console.log(data.results);
    })
 }
 function showMovie(data){
    MediaDeviceInfo.innerHtml = "";
    data.forEach((movie)=> {
        const{title ,poster_path , id} = movie;
        // console.log({title ,poster_path , id});

        const movieElement = document.createElement("div")
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <a href="./movdet.html?id=${id}">
              <img src="${imgUrl + poster_path}" />
              <h4 id="movieName">${title}</h4>
            </a>
        `;
    main.appendChild(movieElement);
    });
 }
let movieId = location.search.split("=")[1];

const movieDetailsData = document.getElementById("movieData");

 function getMoviesDetails(url){
    fetch(url).then((res)=>
    {return res.json()}).then((data) => {
        data.results.forEach((movie) => {
            if(movie.id == movieId){
                const { title , poster_path , overview} = movie;
                const mElement = document.createElement("div");
                mElement.classList.add("container");
                mElement.innerHTML = `
                <img src= "${imgUrl + poster_path}"/>
                <div id="dataBox">
                <h3>${title}</h3>
                <p>${overview}</p>
                </div>
                
                `
                movieDetailsData.appendChild(mElement)
        }
        });
    });
 }
   getMoviesDetails(apiUrl);