import { useEffect, useState } from "react";

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        fetch('https://swapi.dev/api/people', {signal: abortController.signal})
            .then(response => response.json())
            .then(result => setCharacters(result.results));

        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <>
            <h2>Star Wars Characters</h2>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}
