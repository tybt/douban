import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as collectionsAction from '../actions/collectionsAction';

import Collections from '../pages/collections/collections';

class CollectionsContainer extends React.Component {
  

  render() {
    return <Collections {...this.props} />;
  }
}


const mapStateToProps = (state) => {
  const { collectionsReducer } = state;
  return {
    collectionsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const collectionsActions = bindActionCreators(collectionsAction, dispatch);
  return {
    collectionsActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);
