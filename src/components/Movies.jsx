
const Movies = () => {
    const moviesArray = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
    return (
        <ul>
            {moviesArray.map((movie) => (
                <li key={movie.title}> {movie.title} - {movie.genre}</li>
            ))}
        </ul>
    )
}

export default Movies
