import { useState } from "react";

const withIsMovie = (OriginalComponent) => {
  return (props) => {
    const [isMovie, setIsMovie] = useState(true);

    const handleIsMovieTrue = (e) => {
      e.preventDefault();

      setIsMovie(true);
    };
    const handleIsMovieFalse = (e) => {
      e.preventDefault();

      setIsMovie(false);
    };

    return (
      <OriginalComponent
        isMovie={isMovie}
        handleIsMovieTrue={handleIsMovieTrue}
        handleIsMovieFalse={handleIsMovieFalse}
      />
    );
  };
};

export default withIsMovie;
