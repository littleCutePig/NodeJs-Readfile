import React, { Component } from 'react';
import Html from '../route/index';
import { connect } from 'react-redux';

class Home extends Component {
  state = {}
  render() {
    return (
      <>
        Home
      </>
    );
  }
}
let mapState = state => {
  return state;
}
let mapDispatch = dispatch => ({

})

export default connect(
  mapState,
  mapDispatch
)(Home);