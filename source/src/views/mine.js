import React, { Component } from 'react';
import Html from '../route/index';
import { Link } from 'react-router-dom';

class Mine extends Component {
  state = {}
  render() {
    return (
      <>
        <div className='mineWrap'>
          <header>
            <p>好友</p>
            <Link to='/mine/guanzhu'><p>关注</p></Link>

            <Link to='/mine/shoucang'><p>收藏</p></Link>
          </header>
          <div>
            <Html route={this.props.route}></Html>
          </div>
        </div>
      </>
    );
  }
}

export default Mine;