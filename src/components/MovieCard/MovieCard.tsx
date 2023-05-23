import { IMAGE_SOURCE } from "../../constants/moviesMock";
import genres from  "../../constants/genres.json"
import { MovieCardProps } from  "./types"
import { 
    ImageContainer, 
    InfoShow, 
    ShowBox, 
    ShowCalification, 
    ShowLabelTitle, 
    ShowThumb, 
    ShowTitle 
} from "./styles";
import { Pill } from "../Pill";
import { useNavigate } from "react-router-dom";





const MovieCard: React.FC<MovieCardProps> = ({path, title, voteAverage, genreId, movieId}) => {
    const poster = IMAGE_SOURCE + path;
    const navigate = useNavigate();

    const getGenre = (genreId: number) => {
        const key: any = Object.keys(genres.genres).find(
        (genre: any):boolean => genres.genres[genre].id === genreId
        );
        if (key) {
        return genres.genres[key].name;
        }
        return "Not Classified";
        };

    const getColor = (rating:number) => {
        if (rating >= 8){
            return '#74b566'
        } else if (rating >=7){
            return '#efb810'
        }
    }

    const navigateMovies = (id: number, movieName: string) => {
        navigate(`/show/${id}`, { state: { movie: movieName } });
    };
    

    return (
        <>
            <ShowBox onClick={() => navigateMovies(movieId, title)}>
                <ImageContainer>
                    <ShowThumb src={poster} />
                </ImageContainer>
                <InfoShow>
                    <ShowTitle>
                        <Pill genre = {getGenre(genreId)} pillColor={getColor(voteAverage)} />
                        <ShowLabelTitle>{title}</ShowLabelTitle>
                        <ShowCalification>{voteAverage}</ShowCalification>
                    </ShowTitle>
                </InfoShow>
            </ShowBox>

        </>
    );
};

export default MovieCard