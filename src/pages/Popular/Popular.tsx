import React, { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard";
import { getPopular } from "../../services";
import { useNavigate } from "react-router-dom";
import { 
  GeneralWrapper, 
  LargeHeaderTitleWrapper} from "../styles";

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const getPopularMovies = async () => {
    await getPopular()
      .then((res) => {
        if (res && res.data) {
          console.log(res.data, "data");
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPopularMovies();
  }, []);


  return (
    <GeneralWrapper>
      <LargeHeaderTitleWrapper>POPULAR</LargeHeaderTitleWrapper>
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genre_ids[0]}
            movieId={movie.id}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </GeneralWrapper>
  );
};

export default Popular;