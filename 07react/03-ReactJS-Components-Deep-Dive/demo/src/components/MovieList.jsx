import { useState } from 'react';

export default function MovieList() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Christ',
        'Lord of the Rings',
    ]);

    const updateMoviesHandler = () => {
        setMovies(oldMovies => {
            // const newMovies = oldMovies.slice(); // new refference
            const newMovies = [...oldMovies] // new refference

            const removedMovie = newMovies.shift();

            newMovies.push(removedMovie);

            return newMovies;
        });
    };

    return (
        <section>
            <h2>Movie List</h2>

            <ul>
                {movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>

            <button onClick={updateMoviesHandler}>Update Movies</button>

        </section >
    );
}
