import React, { Component } from 'react';
import { connect } from 'react-redux';

class GuanZhu extends Component {
  render() {
    let { allCont } = this.props;
    console.log(allCont);
    return (
      <>
        <h3>我的关注</h3>
        <ul>
          {
            allCont.map((item, i) => (
              <li key={i}>{item.guanzhu ? item.title : ''}</li>
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
)(GuanZhu);