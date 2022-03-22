import { Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from './common/input';

function MovieSearchBar({ category, word }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(word ? word : '');

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category}/search/${keyword}`);
    }
  }, [keyword, category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keyword, goToSearch]);
  return (
    <div className='flex flex-col sm:block '>
      <CustomInput
        type='text'
        placeholder='Enter keyword'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className='w-full '
      />
      <Button
        size='small'
        className='my-2 sm:my-0 '
        variant='contained'
        onClick={goToSearch}
      >
        Search
      </Button>
    </div>
  );
}

export default MovieSearchBar;
