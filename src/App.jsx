import { useState, useEffect, createElement } from "react";

import "./App.css";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const baseURL = "https://search.imdbot.workers.dev/?q=";

function App() {
    const [result, setResult] = useState(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const searchTerm = evt.target[0].value;

        const response = await axios.get(baseURL + searchTerm);
        setResult(response.data.description);
    };

    return (
        <>
            <nav>
                <h1>📽️ Movie Listing with API example 🍿</h1>
            </nav>
            <main>
                <SearchBar handleSubmit={handleSubmit}></SearchBar>
                <MovieList result={result} />
            </main>
        </>
    );
}

export default App;
