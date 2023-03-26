import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg, largeImg, alt, openModal }) => {
  return (
    <GalleryItem onClick={() => openModal(largeImg, alt)}>
      <GalleryItemImg src={smallImg} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: propTypes.string.isRequired,
  largeImg: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};
