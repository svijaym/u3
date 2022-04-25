// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?apikey=9698eefd&s=${search};
let movielist = document.getElementById('movies');
let id;
async function findMovies()
{
try{
    const find = document.getElementById('search').value;

    const res = await fetch(`https://www.omdbapi.com/?apikey=9698eefd&s=${find}`)

    const data = await res.json();

    const movies = data.Search;

    return movies;
} catch (err) {
    console.log(err);
}
}

function appendMovies(data){
    movielist.innerHTML = null;
    data.forEach(function(el)
    {
        let indiv = document.createElement('div');
        let poster = document.createElement('img');
        poster.src = el.Poster;
        poster.setAttribute("class","pt");

        let p = document.createElement('p');
        p.innerText = el.Title;

        let btn = document.createElement('button');
        btn.innerText = "Book Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function()
        {
            book(el);
        })

        indiv.append(poster,p,btn);
        movielist.append(indiv);

    });
}
function book(data){
   
    data.forEach(function(el)
    {
        let indiv =  document.createElement('div');

        let poster = document.createElement('img');
        poster.src = el.Poster;
        poster.setAttribute("class","pt");

        let p = document.createElement('h3');
        p.innerText = el.Title;

        indiv.append(p,poster);
        movie.append(indiv);

        window.location.href = "checkout.html";

    });
}

 async function main()
 {
     let data = await findMovies();

     if(data === undefined)
     {
         return false;
     }
     appendMovies(data);
 }

 function debounce(func,delay)
 {
     if (id) {
         clearTimeout(id);
     }

     id = setTimeout(function(){
         func();
     },delay);
 }