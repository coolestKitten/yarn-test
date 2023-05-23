import { MovieCard } from "../../components/MovieCard";
import { useEffect, useState } from "react";
import { 
    GeneralWrapper,
    LargeHeaderTitleWrapper } from "../styles";

const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);
    
    useEffect(() => {
        const accessFavorites = () => {
        const storedFavorites = localStorage.getItem('tempFavorites');
        const favoritesExists = storedFavorites !== null && storedFavorites !== undefined;
        if (favoritesExists) {
            const parsedFavorites: any[] = JSON.parse(storedFavorites);
            console.log(parsedFavorites);
            setFavoriteMovies(parsedFavorites);
        }
    };

    accessFavorites();
  }, []);

    
      return (
        <GeneralWrapper>
          <LargeHeaderTitleWrapper>FAVORITES</LargeHeaderTitleWrapper>
          {favoriteMovies?.length > 0 ? (
            favoriteMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genres[0].id}
            movieId={movie.id}
          />
        ))
      ) : (
        <div>No favorites to show</div>
      )}
        </GeneralWrapper>
      );
}

export default Favorites;