import React from 'react';
import logo from '../../../Asset/img/logo.png';
import bg from '../../../Asset/img/footer-bg.jpg';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      className='relative py-24 px-12 bg-top bg-cover'
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Container maxWidth='lg'>
        <div className='flex justify-center items-center'>
          <div className=' w-3/5 sm:w-64'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
        </div>
        <div className='grid  grid-cols-2 sm:grid-cols-3 text-right'>
          <div className='text-sm  flex gap-2 flex-col justify-start items-center'>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>
          <div className='gap-2 text-sm flex flex-col justify-start items-center'>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
          <div className='gap-2 text-sm flex flex-col justify-start items-center'>
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Footer;
