import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import FIlter from "./FIlter";
import Title from "./Title";
import Search from "./Search";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [query, setQuery] = useState("");
  const [openmodal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({});

  const searchMovies = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
          console.log(movies);
        } else {
          setMovies([]);
        }
      });
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  const toggleModal = (id) => {
    let modalmovie = {};
    modalmovie = popular.concat(movies).find((mv) => mv.id === id);
    setOpenModal(true);
    setModal(modalmovie);
    // console.log(modalmovie.overview)
  };
  const closeModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="App">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openmodal && (
          <Modal
            toggleModal={toggleModal}
            closeModal={closeModal}
            modal={modal}
          />
        )}
      </AnimatePresence>

      <Search query={query} searchMovies={searchMovies} />
      <div className="all-movies">
        {movies.length > 0 ? (
          movies.map((mve) => {
            return <Movie key={mve.id} movie={mve} toggleModal={toggleModal} />;
          })
        ) : (
          <div className="noshow-text">
            <p className="slide-top">↑ use search bar to find your movie ↑</p>
            <p className="slide-bottom">↓ or check some of popular movies ↓</p>
          </div>
        )}
      </div>
      <Title />
      <FIlter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <Movie key={movie.id} movie={movie} toggleModal={toggleModal} />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
