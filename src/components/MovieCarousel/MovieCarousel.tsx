import React, { useEffect, useState } from "react";
import { MovieCarouselProp } from "./types";
import { CarouselItem, CarouselWrapper } from "./styles";
import { MovieCard } from "../MovieCard";
import { getPopular, getTopRated, getNowPlaying } from "../../services/movies/getMovie";

const MovieCarousel: React.FC<MovieCarouselProp> = ({movsOptions, ownlist}) => {
    const [movies, setMovies] = useState<any[]>([]);


    const getPopularMovies = async () => {
        await getPopular().then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovies(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const getTopRatedMovies = async () => {
        await getTopRated().then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovies(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const getNowPlayingMovies = async () => {
        await getNowPlaying().then((res) => {
            if(res && res.data){
                console.log(res.data, "data");
                setMovies(res.data.results);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        if(movsOptions=="popular"){
            getPopularMovies();
        }else if(movsOptions=="top-rated") {
            getTopRatedMovies();
        }else if(movsOptions=="own-list"){
            setMovies(ownlist);
        }else{
            getNowPlayingMovies();
        }
    }, []);

    return(
    <>
      <CarouselWrapper>
        {movies?.length > 0 ? (
            movies.map((movie) => (
                <CarouselItem>
                    <MovieCard
                    key={movie.id}
                    path={movie.poster_path}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    genreId={movie.genre_ids[0]}
                    movieId={movie.id}
                    />
                </CarouselItem>
            ))
        ) : (
            <p>None</p>
        )
        
        }
      </CarouselWrapper>
    </>
    );
}
export default MovieCarousel;