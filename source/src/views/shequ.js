import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class SheQU extends Component {
  render() {
    let { list, allCont } = this.props;
    return (
      <div className='shequWrap'>
        <h3>圈子推荐</h3>
        <section>
          <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
            <li>最新推荐</li>
            {
              list.map(item => (
                <li key={item.id}>
                  {item.context[0].type}
                </li>
              ))
            }
          </ul>
          <div className='listWrap'>
            {
              allCont.map((item, i) => (
                <div key={i}>
                  <h3>{item.title}</h3>
                  <p>{item.cont}</p>
                  <p>分类：{item.type}</p>
                  <Link to='/commit'>
                    <button
                      onClick={() => this.props.commitMsg(i, item.title, item.cont, item.type)}
                    >评论</button>
                  </Link>
                  <button onClick={() => this.props.shoucang(i)}>
                    {item.shoucang ? '取消收藏' : '收藏文章'}
                  </button>
                  <button onClick={() => this.props.dianzan(i)}>点赞<span>{item.goods}</span></button>
                  <button onClick={() => this.props.guanzhu(i)}>
                    {item.guanzhu ? '取消关注' : '关注作者'}
                  </button><br />
                </div>
              ))
            }

          </div>
        </section>
        <Link to='/fatie' style={{ display: 'inline-block', width: '100%' }}>
          <button id='ft' onClick={this.toFT}>发帖</button>
        </Link>
      </div>
    );
  }


}

let mapState = state => {
  return state;
}
let mapDispatch = dispatch => ({
  guanzhu(index) {
    dispatch({
      type: 'GUAN_ZHU',//关注
      value: index,
    })
  },

  shoucang(index) {
    console.log(index)
    dispatch({
      type: 'SHOU_CANG',//收藏
      value: index,
    })
  },
  dianzan(index) {
    dispatch({
      type: 'DIAN_ZAN',//点赞
      value: index,
    })
  },
  commitMsg(index, title, cont, type) {
    console.log(index)
    dispatch({
      type: 'COMMIT_MSG', //评论
      index
    })
  }
})

export default connect(
  mapState,
  mapDispatch
)(SheQU);