const movies = [
    { title: "Deadpool 3", image: "https://lh3.googleusercontent.com/proxy/mMo3TOVgkW0r7qUcr4cB0izGQkpFikPhOQlCabV9lx94hfUCLxYK7wGdiJHOu6cjTW3X61hT0EljtsEdchhTGl00B1yzueybUZoMgFBGuzOtp_P9yKJKDLrTG0hQwEtkIg", link: "https://embedder.net/e/tt1431045/" },
    { title: "Duna: Parte Dois", image: "https://wherefilmed.org/media/cache/bd/e7/bde7dbc226c063ba7b04a3e5a14e285b.jpg" },
    { title: "Furiosa", image: "https://myhotposters.com/cdn/shop/files/mL7160_1024x1024.jpg?v=1714867441", link: "https://embedder.net/e/tt12037194/" },
    { title: "Capitão Marvel 2", image: "https://i.pinimg.com/736x/3c/6d/98/3c6d9808a6fd8c91898f90226138fe0a.jpg" },
    { title: "Spider-Man: Beyond the Spider-Verse", image: "https://preview.redd.it/vofn7ybnoe481.png?width=1080&crop=smart&auto=webp&s=54e09f16c9cf5d881b5b8648652b0aa0ecd1098b" },
    { title: "A Pequena Sereia", image: "https://br.web.img2.acsta.net/pictures/23/03/13/13/40/3177161.jpg" },
    { title: "Transformers: One", image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/transformers-one-2024-film-official-poster.jpg" },
    { title: "Avatar 3", image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/01/avatar-3-film-teaser-poster.jpg" },
    { title: "Meu Malvado Favorito 4", image: "https://image.tmdb.org/t/p/original/jvBaDt3NkRQoSWsruxzTG7FzIZI.jpg" },
    { title: "Divertida Mente 2", image: "https://image.tmdb.org/t/p/original/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg/150" },
    { title: "Coringa: Delirio a Dois", image: "https://http2.mlstatic.com/D_NQ_NP_967285-MLB75800511523_042024-O.webp/150" },
    { title: "Venom: A Última Rodada", image: "https://media.fstatic.com/yEPszJSkoijye7ZGjxLJ3MTzmIE=/322x478/smart/filters:format(webp)/media/movies/covers/2024/06/cats_HSrrBKq.jpg" },
    // Adicione mais filmes se desejar
];


function displayMovies(moviesToDisplay) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    moviesToDisplay.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <a href="${movie.link}" target="">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            </a>
        `;
        movieList.appendChild(movieDiv);
    });
}


function searchMovies() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
}

// Exibir todos os filmes ao carregar a página
displayMovies(movies);



