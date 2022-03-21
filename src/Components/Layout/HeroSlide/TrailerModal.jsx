import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import tmdbApi, { category } from '../../../api/tmdbAip';
import ModalContent from '../../common/Modal';

function TrailModal({ item, open, onClose }) {
  const [haveTrailer, setHaveTrailer] = useState(null);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const fetchTrailer = async () => {
      const videos = await tmdbApi.getVideos(category.movie, item.id);

      if (videos.results.length > 0) {
        setHaveTrailer(true);
        const _videoSrc =
          'https://www.youtube.com/embed/' + videos.results[0].key;

        setVideoSrc(_videoSrc);
      } else {
        haveTrailer(false);
      }
    };
    fetchTrailer();
  });

  return (
    <Modal open={open} onClose={onClose} id={`modal_${item.id}`}>
      <ModalContent>
        {haveTrailer ? (
          <iframe
            src={videoSrc}
            width='100%'
            height='500px'
            title='trailer'
            className='rounded-xl border-0'
          ></iframe>
        ) : (
          <p>No trailer</p>
        )}
      </ModalContent>
    </Modal>
  );
}

export default TrailModal;
