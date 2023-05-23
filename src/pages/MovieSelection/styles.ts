import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const MovieSelectionWrapper = styled.div`
    display: flex;
    align-items: flex-start; 
`;

export const StyledSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    padding-right: 25px;
`;

export const SpanContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


export const ShowTagsAndDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 4px;
    margin-bottom: 1.5rem!important;
`;

export const MoviePoster = styled.img`
    height: 37.5em;
    width: 25em; 
    border-radius: 10px;
`;

export const ShowInfo = styled.div`
    padding: 10px 0;
    position: relative;

`;

export const ShowContainer = styled.div`
    max-width: 100%;
    padding: 0 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const MovieThumb = styled.div`
    width: 100%
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
`;

export const CarouselWrapper = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;

export const ExtraBlock = styled.div`
    width: 350px;
    float: left;
`;

export const  ExtraHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    gap: 0.2em;

`;
