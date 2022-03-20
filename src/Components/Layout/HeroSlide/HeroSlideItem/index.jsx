import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiConfig from '../../../../api/apiConfig';
import { HeroSlideItemStyled } from './HeroSlideItemElements';

function HeroSlideItem({ item, active }) {
  const navigate = useNavigate();

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <HeroSlideItemStyled
      className={` ${active && 'active'}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container maxWidth='xl' className='content'>
        <div className='info'>
          <h2 className='title lg:text-7xl md:text-6xl sm:text-4xl text-2xl'>
            {item.title}
          </h2>
          <p className='overview font-bold'>{item.overview}</p>

          <div className='btns flex gap-4 '>
            <Button variant='contained' color='primary'>
              Watch now
            </Button>
            <Button
              onClick={() => console.log('trailer')}
              variant='outlined'
              color='primary'
            >
              Watch trailer
            </Button>
          </div>
        </div>

        <div className=' flex flex-1 items-center justify-end '>
          <img
            className={` rounded-xl shadow  sm:hidden md:block`}
            src={apiConfig.w500Image(item.poster_path)}
            alt='poster'
          />
        </div>
      </Container>
    </HeroSlideItemStyled>
  );
}

export default HeroSlideItem;
