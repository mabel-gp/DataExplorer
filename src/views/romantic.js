export default async function romanticView() {
    const apiKey = CONFIG.API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&certification_country=US&certification=G&language=es-ES`;
    const response = await fetch(url);
    const data = await response.json();

    const moviesList = data.results.map(movie =>` 
            <li>
                <h3 id="subtitle-movie">${movie.title}</h3>
                <p id="paragraph-movie">${movie.overview}</p>
                <img id="img-romantic" class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" width="200">
            </li>
        `).join('');

    const moviesHtml = `
        <h1 class="title-view" id="title-romantic">Películas Románticas</h1>
        <div class="list-container">
            <ul>
                ${moviesList}
            </ul>
        </div>
        <div class="container-button-inicio">
            <button onclick="location.hash='home'" id="button-inicio">Volver al inicio</button>
        </div>
    `;

    return moviesHtml; 
}
