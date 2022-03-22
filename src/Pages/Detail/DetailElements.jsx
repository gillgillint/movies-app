import styled from '@emotion/styled';

export const Banner = styled.div`
  height: 50vh;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;

export const MovieContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  position: relative;
  padding: 0 2rem;

  .poster {
    flex: 1;
    @media screen and (max-width: 600px) {
      display: none;
    }

    .img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 16px;
      padding-top: 165%;
    }
  }

  .info {
    width: 70%;
    padding-left: 2rem;
    position: relative;

    @media screen and (max-width: 600px) {
      width: 100%;
      padding-left: 0;
    }

    & > * {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 4rem;
      line-height: 1;
      @media screen and (max-width: 600px) {
        font-size: 2rem;
        border: none;
      }
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-content: start;
      & > * ~ * {
        margin-left: 0.5rem;
      }

      .item {
        padding: 0.5rem 1.5rem;
        border: 2px solid #fff;
        border-radius: 16px;
        font-size: 0.8rem;
        font-weight: 600;

        @media screen and (max-width: 600px) {
          font-size: 12px;
          border: none;
        }
      }
    }
  }
`;

export const CastStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));

  .item {
    .img {
      padding-top: 160px;
      background-size: cover;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
      border-radius: 16px;
    }
    .name {
      font-size: 0.8rem;
    }
  }
`;
