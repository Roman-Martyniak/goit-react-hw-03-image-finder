import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, ModalImg } from './Modal.styled';
import propTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  hendleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.hendleClickBackdrop}>
        <ModalBox>
          <ModalImg src={this.props.modalImage} alt={this.props.modalAlt} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
