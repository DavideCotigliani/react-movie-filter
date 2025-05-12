import { useEffect, useState } from "react"

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
    // useState per i titoli
    const [searchTitle, setSearchTitle] = useState("")



    // creo la funzione di useEffect
    useEffect(() => {
        const filteredfilms = defaultMovies.filter((defaultMovies) => {
            return defaultMovies.genre.toLowerCase().includes(search.toLowerCase());
        })
        setFilteredArray(filteredfilms);
    }, [defaultMovies, search])

    // creo un seconda useEffect per filtraggio dei titoli
    useEffect(() => {
        const filteredtitles = defaultMovies.filter((defaultMovies) => {
            return defaultMovies.title.toLowerCase().includes(searchTitle.toLowerCase());
        })
        setFilteredArray(filteredtitles);
    }, [defaultMovies, searchTitle])

    // estraggo i generi dall'array
    const genres = (moviesArray.map(movie => movie.genre))
    // estraggo i titoli dall'array
    const titles = (moviesArray.map(movie => movie.title))
    return (
        <>
            {/* Creo il select */}
            <select className="select-text" value={search} onChange={e => { setSearch(e.target.value) }} >
                <option value="">Tutti i generi</option>
                {/* Ciclo i generi dentro l'option */}
                {genres.map((genre) => {
                    return <option key={genre}>{genre}</option>
                })}
            </select>

            <select className="select-text" value={searchTitle} onChange={e => { setSearchTitle(e.target.value) }}>
                <option value="">Tutti i titoli</option>
                {/* Ciclo i titoli dentro l'option */}
                {titles.map((title) => (
                    <option key={title}>{title}</option>
                ))}
            </select>
            {/* Filtro l'array */}
            <ul>
                {filteredArray.map((movie) => (
                    <li key={movie.title}> {movie.title} - {movie.genre}</li>
                ))}
            </ul>
        </>
    )
}

export default Movies
