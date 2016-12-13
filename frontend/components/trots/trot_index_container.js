import React from 'react';
import { connect } from 'react-redux';
import TrotIndex from './trot_index';
import { asArray } from '../../reducers/selectors';
import { fetchTrots, deleteTrots } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ trots }) => ({
  trots: asArray(trots),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrots: () => dispatch(fetchTrots()),
  deleteTrots: () => dispatch(deleteTrots()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrotIndex);
