import "./Movie.css";

export default function Movie({ post }) {
    return (
        <a href={post["#IMDB_URL"]}>
            <div className="movieCard">
                <img src={post["#IMG_POSTER"]} alt="" />
                <div className="info">
                    <h2>{post["#TITLE"]}</h2>
                    <h3>{post["#YEAR"]}</h3>
                </div>
            </div>
        </a>
    );
}
