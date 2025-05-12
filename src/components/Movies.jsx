import { useState } from "react"

const Movies = () => {
    const moviesArray = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
    // Creo il primo useState dell'array originale
    const [defaultMovies, setDefaultMovies] = useState(moviesArray)
    // creo array per la funzione State di search
    const [search, setSearch] = useState("")
    // creo array per la funzione State di filtraggio
    const [filteredArray, setFilteredArray] = useState(defaultMovies)

    return (
        <>
            {/* Creo il select */}
            <select className="select-text" ></select>
            {/* Filtro l'array */}
            <ul>
                {moviesArray.map((movie) => (
                    <li key={movie.title}> {movie.title} - {movie.genre}</li>
                ))}
            </ul>
        </>
    )
}

export default Movies
