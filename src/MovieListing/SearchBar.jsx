import "./SearchBar.css";

export default function SearchBar({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a movie name..." />
            <button>search movie</button>
        </form>
    );
}
