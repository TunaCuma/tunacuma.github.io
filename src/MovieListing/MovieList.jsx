import Movie from "./Movie";
import "./MovieList.css";

export default function MovieList({ result }) {
    if (result) {
        console.log(result);
        return (
            <div className="MovieList">
                {result.map((movie) => (
                    <Movie post={movie} />
                ))}
            </div>
        );
    }
    return <p>No movies to display.</p>;
}
