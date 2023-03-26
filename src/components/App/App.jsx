import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from '../services/getImages';
import { AppBox, Message, MessageQuery } from './App.styled';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    isLoading: false,
    showModal: false,
    modalImage: '',
    modalAlt: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        this.state.query !== prevState.query ||
        this.state.page !== prevState.page
      ) {
        this.setState({ isLoading: true });

        const data = await getImages(this.state.query, this.state.page);
        const { hits, totalHits } = data;

        this.setState({
          images: [...this.state.images, ...hits],
          totalHits,
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      this.setState({ isLoading: false });
    }
  }

  handleFormSubmit = object => {
    const { query, page, images } = object;

    this.setState({
      query,
      page,
      images,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (modalImage, modalAlt) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalImage,
      modalAlt,
    }));
  };

  render() {
    return (
      <AppBox>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery openModal={this.toggleModal} images={this.state.images} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
        {this.state.totalHits / 12 >= this.state.page &&
          !this.state.isLoading && <Button onClick={this.loadMore} />}
        {this.state.isLoading && <Loader />}
        {this.state.totalHits === 0 && (
          <Message>
            Sorry, there are no images matching your search:{' '}
            <MessageQuery>"{this.state.query}"</MessageQuery>. Please try again.
          </Message>
        )}
        {this.state.showModal && (
          <Modal
            modalImage={this.state.modalImage}
            modalAlt={this.state.modalAlt}
            closeModal={this.toggleModal}
          />
        )}
      </AppBox>
    );
  }
}
