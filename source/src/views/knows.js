import React, { Component } from 'react';
import { connect } from 'react-redux';
class Know extends Component {
  state = {}
  render() {
    return (
      <>
        知识库
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
)(Know);