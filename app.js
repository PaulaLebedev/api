fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
    return response.json()
}).then(data => {

    const movies = document.getElementById('movies')

    data.forEach(movie => {
        console.log(movie)
        let movieDiv = document.createElement('div')
        movieDiv.innerHTML = '<div class="title">' + movie.title + '</div> <div class="description">' + movie.description + '</div>'
        movies.append(movieDiv)

    });

})

