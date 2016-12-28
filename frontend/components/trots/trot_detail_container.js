import React from 'react';
import { connect } from 'react-redux';
import TrotDetail from './trot_detail';
import { fetchTrot, deleteTrot } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  trot: state.trotDetail,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrot: (id) => dispatch(fetchTrot(id)),
  deleteTrot: (id) => dispatch(deleteTrot(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrotDetail);
