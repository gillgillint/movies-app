import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';

function MovieCard({ item, category }) {
  const link = `/${category}/${item.id}`;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <Box
        className='hover:scale-105 hover:z-30 overflow-hidden duration-200 relative rounded-lg mb-4 '
        sx={{ pb: '160%' }}
      >
        <img
          src={bg}
          alt='poster'
          className='absolute top-0 left-0 w-full h-full object-cover  '
        />
      </Box>
    </Link>
  );
}

export default MovieCard;
