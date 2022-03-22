import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbAip';
import MovieList from '../../Components/MovieList';
import Cast from './Cast';
import { Banner, MovieContent } from './DetailElements';
import VideoList from './VideoList';

function Detail() {
  const { category, id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    const getDetail = async () => {
      const res = await tmdbApi.detail(category, id, { params: {} });

      setItem(res);
    };
    getDetail();
  }, [category, id]);

  return (
    <div>
      {item && (
        <>
          <Banner
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></Banner>
          <MovieContent className='container mb-12'>
            <div className='poster'>
              <div
                className='img'
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className='info'>
              <div className='title'>{item.title || item.name}</div>
              <div className='genres'>
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className='item'>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className='overview'>{item.overview}</p>
              <div className='cast'>
                <div className='section__header'>
                  <h2>Cast</h2>
                </div>
                <Cast id={item.id} />
              </div>
            </div>
          </MovieContent>
          <Container maxWidth='xl'>
            <div className='section mb-12'>
              <VideoList id={item.id} />
            </div>
            <div className='section mb-12'>
              <div className='section__header mb-8'>
                <h1>Similar</h1>
              </div>
              <MovieList category={category} type='similar' id={item.id} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
}

export default Detail;
