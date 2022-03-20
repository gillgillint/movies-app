import styled from '@emotion/styled';

export const HeroSlideItemStyled = styled.div`
  padding: 9rem 0;
  width: 100%;
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

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .info {
      width: 55%;
      padding: 0 3rem;
      position: relative;
      @media screen and (max-width: 900px) {
        width: 100%;
      }
      & > * ~ * {
        margin-top: 3rem;
      }
    }
  }

  img {
    width: 400px;
    transform: scale(0);
    transition: transform 0.7s ease;
  }

  .btns,
  .title,
  .overview {
    opacity: 0;
    transform: translateY(-100px);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &.active {
    .btns,
    .title,
    .overview {
      opacity: 1;
      transform: translateY(0);
    }

    .title {
      transition-delay: 0.3s, 0.3s;
    }

    .overview {
      transition-delay: 0.6s, 0.6s;
    }

    .btns {
      transition-delay: 0.9s, 0.9s;
    }
  }

  &.active > .content {
    img {
      transform: scale(1) !important;
    }
  }
`;
