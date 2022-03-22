import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbAip';
import { CastStyled } from './DetailElements';

function Cast({ id }) {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, id);
      setCasts(
        res.cast
          .filter((e) => {
            if (e.profile_path) {
              return e;
            } else {
              return;
            }
          })
          .slice(0, 5)
      );
    };
    getCredits();
  }, [category, id]);

  return (
    <CastStyled>
      {casts.map((item, i) => (
        <div key={i} className='item'>
          <div
            className='img'
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className='name'>{item.name}</p>
        </div>
      ))}
    </CastStyled>
  );
}

export default Cast;
