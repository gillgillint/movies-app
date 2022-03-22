import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGrid from '../Components/Layout/MovieGrid';

function Catalog() {
  const params = useParams();

  return (
    <div className='page__header'>
      <h2 className='mb-4 '>{`${
        params.category === 'movie' ? 'Movies' : 'TV Series'
      }`}</h2>

      <Container maxWidth='xl'>
        <div className='section mb-12'>
          <MovieGrid category={params.category} />
        </div>
      </Container>
    </div>
  );
}

export default Catalog;
