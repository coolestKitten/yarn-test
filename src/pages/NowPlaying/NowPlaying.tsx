import React, { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard";
import { getNowPlaying } from "../../services/movies/getMovie";
import { 
  GeneralWrapper, 
  LargeHeaderTitleWrapper } from "../styles";

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const getNowPlayingMovies = async () => {
    await getNowPlaying()
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
    getNowPlayingMovies();
  }, []);

  return (
    <GeneralWrapper>
      <LargeHeaderTitleWrapper>NOW PLAYING</LargeHeaderTitleWrapper>
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genre_ids && movie.genre_ids.length > 0 ? movie.genre_ids[0] : null}
            movieId={movie.id}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </GeneralWrapper>
  );
};

export default NowPlaying;