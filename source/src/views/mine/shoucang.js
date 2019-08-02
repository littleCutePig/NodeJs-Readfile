import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShouCang extends Component {
  render() {
    let { allCont } = this.props;
    console.log(allCont);
    return (
      <>
        <h3>收藏的文章</h3>
        <ul>
          {
            allCont.map((item, i) => (
              <li key={i}>{item.shoucang ? item.cont : ''}</li>
            ))
          }
        </ul>
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
)(ShouCang);