import StarIcon from '@mui/icons-material/Star';
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { 
    MovieSelectionWrapper,
    MoviePoster,
    StyledSpan,
    SpanContainer, 
    ShowTagsAndDetailsContainer,
    ShowInfo,
    ShowContainer, 
    MovieThumb,
    MainWrapper, 
    CarouselWrapper,
    ExtraBlock,
    ExtraHolder } from './styles';
import { Pill } from '../../components/Pill';
import { MovieCarousel } from '../../components/MovieCarousel';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails } from '../../services/movies/getMovie';

const MovieSelection: React.FC  = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [favorite, setFavorite] = useState(false);

    const fetchMovieDetails = async () => {
        if (id) {
            await getMovieDetails(parseInt(id, 10))
            .then((res) => {
            if (res && res.data) {
                console.log(res.data, "data");
                setMovieDetails(res.data);
                checkIfFavorite(res.data.id)
            }
            })
            .catch((err) => {
            console.log(err);
            });
        }
    }

    const saveToFavorites = (newFavorite :any) => {
        const storedFavorites = localStorage.getItem('tempFavorites');
        const favoritesExists = storedFavorites !== null && storedFavorites !== undefined;
        if (favoritesExists) {
            const parsedFavorites = JSON.parse(storedFavorites);
            parsedFavorites.push(newFavorite);
            localStorage.setItem('tempFavorites', JSON.stringify(parsedFavorites));
        } else {
            const FavoritesArray = [];
            FavoritesArray.push(newFavorite);
            localStorage.setItem('tempFavorites', JSON.stringify(FavoritesArray));

        }

    }
    
    const removeFromFavorites = () => {
        const storedFavorites = localStorage.getItem('tempFavorites');
        const favoritesExists = storedFavorites !== null && storedFavorites !== undefined;
        if (favoritesExists) {
            const parsedFavorites: any[] = JSON.parse(storedFavorites)
            if(movieDetails){
                const updatedFavorites = parsedFavorites.filter(obj => obj.id !== movieDetails.id);
                localStorage.setItem('tempFavorites', JSON.stringify(updatedFavorites));
            }
        }
    }


    const checkIfFavorite = (movieId: number) => {
        const storedFavorites = localStorage.getItem('tempFavorites');
        const favoritesExists = storedFavorites !== null && storedFavorites !== undefined;
        if(favoritesExists){
            const parsedFavorites: any[] = JSON.parse(storedFavorites)
            const isFavorite = parsedFavorites.some(obj => obj.id === movieId);
            setFavorite(isFavorite);
        }
    }

    const handleClickAddToFavorites = () => {
        if(!favorite){
            saveToFavorites(movieDetails);
            setFavorite(true);
        } else {
            removeFromFavorites();
            setFavorite(false);
        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [id])

    const navBack = () => {
        navigate(-1);
    } 

    return (
        <MainWrapper>
           <MovieSelectionWrapper>
            <MovieThumb>
                {movieDetails && <MoviePoster src={IMAGE_SOURCE + movieDetails.poster_path} />}       
            </MovieThumb>
            {movieDetails && (
                <ShowInfo>
                    <ShowContainer>
                            
                            <div>
                                <h1>{movieDetails.title}</h1>
                            </div>
                            <SpanContainer>
                                <StyledSpan>
                                    <GroupsIcon/>
                                    {movieDetails.adult === true? "18+" : "18-"}
                                </StyledSpan>
                                <StyledSpan>
                                    <WatchLaterIcon/>
                                    {movieDetails.runtime}
                                </StyledSpan>
                                <StyledSpan>
                                    <EventIcon/>
                                    {movieDetails.release_date}
                                </StyledSpan>
                                <StyledSpan>
                                    <StarIcon/>
                                    {movieDetails.vote_average}
                                </StyledSpan>
                                <StyledSpan>
                                    <AssessmentIcon/>
                                    {movieDetails.vote_count}
                                </StyledSpan>
                            </SpanContainer>
                            <div>
                                <p>
                                    {movieDetails.overview}
                                </p>
                            </div>
                            <ShowTagsAndDetailsContainer>
                                <ExtraBlock>
                                    <h4>
                                        Genres
                                    </h4>
                                    <ExtraHolder>
                                        {movieDetails.genres.map((genre: { id: number, name: string }) => (
                                            <Pill
                                                pillColor="#5cb85c"
                                                genre={genre.name}
                                            />
                                        ))}     
                                    </ExtraHolder>
                                     
                                    
                                </ExtraBlock>
                                <ExtraBlock>
                                    <h4>
                                        Favorite
                                    </h4>
                                    {
                                        favorite ? (
                                            <Button
                                                variant="contained"
                                                onClick={handleClickAddToFavorites} 
                                                startIcon={<FavoriteIcon/>}
                                             >
                                                Remove from Favorites
                                            </Button>
                                            ) : (
                                            <Button 
                                                variant="outlined"
                                                onClick={handleClickAddToFavorites}
                                                startIcon={<FavoriteIcon/>}
                                                >
                                                    Add to Favorites 
                                                </Button>
                                            )
                                    }
                                </ExtraBlock>
                            </ShowTagsAndDetailsContainer>
                            
                        </ShowContainer>
                        
                    </ShowInfo>

            )}
            
            
            </MovieSelectionWrapper> 
            <CarouselWrapper>
                <h1>RECOMMENDATIONS</h1>
                <MovieCarousel movsOptions='popular'/>
            </CarouselWrapper>
        </MainWrapper>
        
    );
}

export default MovieSelection;