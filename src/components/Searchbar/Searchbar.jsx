import React, { Component } from 'react';
import { toast } from 'react-toastify';

import {
  SearchbarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.query.trim() === '') {
      toast.error('You did not enter anything to search');
      return;
    }
 
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}
