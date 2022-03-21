import styled from '@emotion/styled';

export const MovieListStyled = styled.div`
  margin-bottom: 2rem;
  .swiper-slide {
    width: 15%;

    @media screen and (max-width: 900px) {
      width: 30%;
    }
    @media screen and (max-width: 600px) {
      width: 40%;
    }
  }
`;
