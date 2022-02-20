import React, { Component } from 'react';
import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import { searchImage } from 'services/image-api';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';
import { SRLWrapper } from 'simple-react-lightbox';

const INITIAL_STATE = {
  images: [],
  currentPage: 1,
  searchQuery: '',
  showModal: false,
  isLoading: false,
  error: null,
  total: 0,
  modalImage: '',
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query.trim(),
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state;
    // const options = { searchQuery, currentPage };
    // if (!searchQuery) {
    //   return;
    // }
    // this.setState({ isLoading: true });
    // ImageApi.fetchImg(options)
    //   .then(hits => {
    //     console.log(hits.length);
    //     this.setState(prevState => ({
    //       images: [...prevState.images, ...hits],
    //       currentPage: prevState.currentPage + 1,
    //       total: hits.length,
    //     }));
    //     window.scrollTo({
    //       top: document.documentElement.scrollHeight,
    //       behavior: 'smooth',
    //     });
    //   })
    //   .catch(error => this.setState({ error }))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
    searchImage(searchQuery)
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          // currentPage: prevState.currentPage + 1,
          total: data.length,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
      modalImage: '',
    });
  };

  render() {
    const { showModal, images, isLoading, modalImage, error, total } =
      this.state;
    const shouldRenderLoadMoreButton =
      images.length > 0 && !isLoading && total > 0;

    console.log(images.length);

    return (
      <>
        {error && (
          <Notification text={`Ooops... something went wrong: ${error}`} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <Container>
            <SRLWrapper>
              <ImageGallery images={images} onImgClick={this.openModal} />
            </SRLWrapper>
          {shouldRenderLoadMoreButton && (
            <Button text={'Load more'} onLoadClick={this.fetchImg} />
          )}

          {isLoading && <Spinner />}

          {/* {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={modalImage} alt="" />
            </Modal>
          )} */}
        </Container>
      </>
    );
  }
}

export default App;
