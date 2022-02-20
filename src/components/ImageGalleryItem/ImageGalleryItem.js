import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, onModal, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={image}
        alt={tags}
        onClick={() => onModal(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  image:
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
  tags: '',
  largeImageURL:
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  onModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
