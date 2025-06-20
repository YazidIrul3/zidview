import { useState } from "react";

const withIsMovie = (OriginalComponent) => {
  return (props) => {
    const [isMovie, setIsMovie] = useState(true);

    const handleIsMovieTrue = () => setIsMovie(true);
    const handleIsMovieFalse = () => setIsMovie(false);

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
