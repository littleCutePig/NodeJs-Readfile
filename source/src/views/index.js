import React, { Component } from 'react';
import Html from '../route/index';
import { connect } from 'react-redux';
import axios from 'axios';
import '../mock/mock';
import { NavLink, Redirect } from 'react-router-dom';
class Index extends Component {
  render() {
    return (
      <>
        <main>
          <Html route={this.props.route}>
            <Redirect exact from='/' to='/home'></Redirect>
          </Html>
        </main>
        <footer>
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/knows'>知识库</NavLink>
          <NavLink to='/shop'>商城</NavLink>
          <NavLink to='/shequ'>社区</NavLink>
          <NavLink to='/mine'>我的</NavLink>
        </footer>
      </>
    );
  }
  componentDidMount() {
    axios.get('/api/list')
      .then(res => {
        this.props.getList(res.data.list)
      })
  }
}

let mapState = state => {
  return state;
}
let mapDispatch = dispatch => ({
  getList(value) {
    console.log(value)
    dispatch({
      type: 'GET_DATA',
      value
    })
  }
})

export default connect(
  mapState,
  mapDispatch
)(Index);