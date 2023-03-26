import { LoadMore } from './Button.styled';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <LoadMore onClick={onClick} type="button">
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
