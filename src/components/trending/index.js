import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import trendingIndex from './trending_index';
import { fetchTrending } from '../../actions/search_result_actions';

const mapStateToProps = (state, ownProps) => ({
  trendingResults: state.searchResult
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(trendingIndex));
