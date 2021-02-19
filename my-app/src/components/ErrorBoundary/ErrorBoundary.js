import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: 'Something went wrong',
  };

  componentDidCatch = (error) => {
    this.setState({ hasError: true, errorMessage: error.message });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}
