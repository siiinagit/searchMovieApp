import { useEffect } from "react";

const FIlter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        all
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        action
      </button>
      <button
        className={activeGenre === 12 ? "active" : ""}
        onClick={() => setActiveGenre(12)}
      >
        adventure
      </button>
      <button
        className={activeGenre === 16 ? "active" : ""}
        onClick={() => setActiveGenre(16)}
      >
        animation
      </button>
      <button
        className={activeGenre === 80 ? "active" : ""}
        onClick={() => setActiveGenre(80)}
      >
        crime
      </button>
      <button
        className={activeGenre === 53 ? "active" : ""}
        onClick={() => setActiveGenre(53)}
      >
        thriller
      </button>
      <button
        className={activeGenre === 10749 ? "active" : ""}
        onClick={() => setActiveGenre(10749)}
      >
        romance
      </button>
      <button
        className={activeGenre === 27 ? "active" : ""}
        onClick={() => setActiveGenre(27)}
      >
        horror
      </button>
    </div>
  );
};

export default FIlter;
