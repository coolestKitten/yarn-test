import { getTopRated } from "../../services/movies/getMovie";
import { MovieCard } from "../../components/MovieCard";
import React, { useState, useEffect } from "react";
import { 
  GeneralWrapper,
  LargeHeaderTitleWrapper } from "../styles";


const TopRated: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
  
    const getTopRatedMovies = async () => {
      await getTopRated()
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
        getTopRatedMovies();
    }, []);

  

  
    return (
      <GeneralWrapper>
        <LargeHeaderTitleWrapper>TOP RATED</LargeHeaderTitleWrapper>
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
  
  export default TopRated;