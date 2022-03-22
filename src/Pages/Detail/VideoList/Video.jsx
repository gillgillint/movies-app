import React, { useEffect, useRef } from 'react';

function Video({ item }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className='mb-12'>
      <div className='mb-6'>
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        width='100%'
        title='video'
        ref={iframeRef}
      ></iframe>
    </div>
  );
}

export default Video;
