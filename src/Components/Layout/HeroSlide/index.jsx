import { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import tmdbApi, { category, movieType } from '../../../api/tmdbAip';
import HeroSlideItem from './HeroSlideItem/index';

function HeroSlide() {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        console.log(res);

        setMovieItems(res.results.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className='mb-12'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}

        // autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => <HeroSlideItem item={item} active={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlide;
