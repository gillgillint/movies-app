import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { category, movieType, tvType } from '../api/tmdbAip';
import HeroSlide from '../Components/Layout/HeroSlide';
import MovieList from '../Components/MovieList';

function Home() {
  return (
    <div>
      <HeroSlide />

      <Container maxWidth='xl'>
        <div className='section mb-12'>
          <div className='section__header '>
            <Typography component='h2'>Trending Movies</Typography>
            <Link to='/movie'>
              <Button
                size='small'
                sx={{ color: 'text.primary' }}
                variant='outlined'
              >
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
          <div className='section__header '>
            <Typography component='h2'>Top Rated Movies</Typography>
            <Link to='/movie'>
              <Button
                size='small'
                sx={{ color: 'text.primary' }}
                variant='outlined'
              >
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
          <div className='section__header '>
            <Typography component='h2'>Trending Series</Typography>
            <Link to='/tv'>
              <Button
                size='small'
                sx={{ color: 'text.primary' }}
                variant='outlined'
              >
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
          <div className='section__header '>
            <Typography component='h2'>Top Rated Series</Typography>
            <Link to='/tv'>
              <Button
                size='small'
                sx={{ color: 'text.primary' }}
                variant='outlined'
              >
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={movieType.top_rated} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
