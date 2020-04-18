import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieIndexAction from '../actions/movieIndexActions';
import MovieIndex from '../pages/movie/movieIndex';

class MovieIndexContainer extends React.Component {
  
  
  render() {
    return <MovieIndex {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { movieIndexReducer } = state;
  return {
    movieIndexReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const movieIndexActions = bindActionCreators(movieIndexAction, dispatch);
  return {
    movieIndexActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndexContainer);
