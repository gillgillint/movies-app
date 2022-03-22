import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { movieType, tvType } from '../../../api/tmdbAip';
import MovieCard from '../../MovieCard';
import MovieSearchBar from '../../MovieSearchBar';
import { MovieGridContainer } from './MovieGridElements';

function MovieGrid({ category }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let res = null;

      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case 'movie':
            res = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            res = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        res = await tmdbApi.search(category, { params });
      }

      setItems(
        res.results.filter((e) => {
          if (e.backdrop_path || e.poster_path) {
            return e;
          } else {
            return;
          }
        })
      );
      setTotalPage(res.total_pages);
    };
    getList();
  }, [keyword, category]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case 'movie':
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    }
    setItems(
      [...items, ...response.results].filter((e) => {
        if (e.backdrop_path || e.poster_path) {
          return e;
        } else {
          return;
        }
      })
    );
    setPage(page + 1);
  };

  return (
    <>
      <div className='section mb-12'>
        <MovieSearchBar category={category} word={keyword} />
      </div>
      <MovieGridContainer>
        {items.map((item) => (
          <MovieCard item={item} category={category} key={item.id} />
        ))}
      </MovieGridContainer>

      {page < totalPage ? (
        <div className=''>
          <Button onClick={loadMore} variant='outlined'>
            Load More
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default MovieGrid;
