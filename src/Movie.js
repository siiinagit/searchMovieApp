import { motion } from "framer-motion";
import React from "react";
import NoImage from "./NoImage";


const Movie = ({ movie, toggleModal}) => {
  return (
    <>
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{duration:.4}}
      onClick={()=>toggleModal(movie.id)}
      className='movie-card'
    >
      <h2 className="movie-title">{movie.title}</h2>
      {movie.backdrop_path?<img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={"this is " + movie.title}
      />: <NoImage />}
      
    </motion.div>
    
    </>
    
  );
};

export default Movie;
