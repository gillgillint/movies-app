import styled from '@emotion/styled';
import { useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Asset/img/logo.png';
import HeaderNav from './HeaderNav';
import { Container } from '@mui/material';

const headerNavData = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Movies',
    path: '/movie',
  },
  {
    title: 'Series',
    path: '/tv',
  },
];

const HeaderStyled = styled.header`
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: height 0.3s ease, background-color 0.3s ease;

  &.shrink {
    height: 5rem;
  }
  .header__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media screen and (max-width: 600px) {
      justify-content: center;
    }
  }
  .logo {
    font-size: 2.5rem;

    img {
      width: 150px;
      margin: -20px;

      @media screen and (max-width: 600px) {
        margin: 0;
      }
    }
  }

  .herder__nav {
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.palette.background.default};
      padding: 0 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <HeaderStyled ref={headerRef}>
      <Container className='header__wrap '>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>

        <ul className='herder__nav gap-4'>
          {headerNavData.map((item, i) => (
            <HeaderNav key={i} item={item} />
          ))}
        </ul>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
