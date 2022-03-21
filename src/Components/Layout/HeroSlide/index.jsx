import { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import tmdbApi, { movieType } from '../../../api/tmdbAip';
import HeroSlideItem from './HeroSlideItem/index';

SwiperCore.use([Autoplay]);

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });

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
        {movieItems.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => <HeroSlideItem item={item} active={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlide;
