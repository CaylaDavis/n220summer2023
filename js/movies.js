let moviesDiv = document.getElementById("moviesDiv")
let movies = [
    { title: "Titanic", genre: "Drama", rating: 7.9, },
    { title: "Shutter Island", genre: "Thriller", rating: 8.2},
    { title: "Annie", genre: "Musical" , rating: 6.9},
    { title: "Dune",genre: "Action", rating: 8 }

]

function changeBackground(){
    if (movies[i].rating > 8)
    moviesDiv.style.backgroundColor = "#6cf542"
}


for(let i = 0; i < movies.length; i++){
    let newEl = document.createElement("div");
    newEl.innerHTML = movies[i].title + ": This is a " + movies[i].genre + " with a rating of "  + movies[i].rating;
    newEl.classList.add("movie")
    moviesDiv.appendChild(newEl);

    function changeBackground(){
        if (movies[i].rating > 8)
        moviesDiv.style.backgroundColor = "#6cf542"

    }
}