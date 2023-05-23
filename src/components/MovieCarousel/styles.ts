import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: auto;
  padding: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CarouselItem = styled.div`
  scroll-snap-align: start;
  margin-right: 16px;
  flex: 0 0 auto;
`;