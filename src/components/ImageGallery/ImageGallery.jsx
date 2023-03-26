import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <GalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallImg={image.webformatURL}
            largeImg={image.largeImageURL}
            alt={image.tags}
            openModal={openModal}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  openModal: propTypes.func.isRequired,
};
