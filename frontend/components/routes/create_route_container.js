import React from 'react';
import { connect } from 'react-redux';
import CreateRoute from './create_route';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
});

const mapDispatchToProps = (store) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoute);
