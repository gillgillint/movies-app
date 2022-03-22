import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../../api/tmdbAip';
import Video from './Video';

function VideoList({ id }) {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, id);
      setVideos(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, id]);
  return (
    <div>
      {videos.map((item) => (
        <Video key={item.id} item={item} />
      ))}
    </div>
  );
}

export default VideoList;
