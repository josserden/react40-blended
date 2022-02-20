import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, src: {portrait, large}, alt }) => (
        <ImageGalleryItem
          key={id}
          img={portrait}
          alt={alt}
          largeImageURL={large}
          onModal={onImgClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
