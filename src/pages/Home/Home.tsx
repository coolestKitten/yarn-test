import { MovieCard } from "../../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { MovieCarousel } from "../../components/MovieCarousel";
import { 
  CarouselWrapper, 
  GeneralWrapper, 
  TitleWrapper} from "./styles";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    
  };

    return (
    <GeneralWrapper>   
      <TitleWrapper>POPULAR</TitleWrapper>
      <CarouselWrapper>
        <MovieCarousel movsOptions="popular"/>
      </CarouselWrapper>
      <TitleWrapper>TOP RATED</TitleWrapper>
      <CarouselWrapper>
        <MovieCarousel movsOptions="top-rated"/>
      </CarouselWrapper>
      <TitleWrapper>NOW PLAYING</TitleWrapper>
      <CarouselWrapper>
        <MovieCarousel movsOptions="now-playing"/>
      </CarouselWrapper>
    </GeneralWrapper>
    )
}

export default Home;