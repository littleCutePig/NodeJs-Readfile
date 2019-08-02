import React, { Component } from 'react';
import { connect } from 'react-redux';

class Commit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '默认标题',
      cont: '默认内容',
      isShow: false,
    }
  }
  render() {
    let { allCont, index } = this.props;
    let { title, cont, isShow } = this.state;
    return (
      <>
        <h3>{allCont[index] ? allCont[index].title : title}</h3>
        <p>{allCont[index] ? allCont[index].cont : cont}</p>
        <div style={{ width: '100%', height: 'auto', boxSizing: ' border-box', padding: '10px', background: 'pink' }}>
          {allCont[index] ? allCont[index].pinglun.map((pl, i) => (
            <p key={i} style={{ borderBottom: '1px solid #f0f0f0', marginTop: '10px', }}>{pl}</p>
          ))
            : '暂无评论'}
        </div><br /><br />
        <button onClick={() => this.addPingLun(index)}>回复</button>
        <button >点赞 {allCont[index] ? allCont[index].goods : 0}</button><br /><br />
        {
          isShow ?
            <div>
              <input type="textarea" style={{ width: '300px', height: '40px' }} ref={ref => this.inp = ref} /> <br />
              <button onClick={() => this.sure(index, this.inp.value)}>确定</button>
              <button onClick={this.no}>取消</button>
            </div> : ''
        }
      </>
    );
  }
  addPingLun = (index) => {
    this.setState({ isShow: !this.state.isShow })
  }
  no = () => {
    this.setState({ isShow: !this.state.isShow })
  }
  sure = (index, value) => {
    this.props.sure(index, value)
    this.setState({ isShow: !this.state.isShow })
  }
}

let mapState = state => {
  return state;
}
let mapDispatch = dispatch => ({
  sure(index, value) {
    // 找到对应下标 添加进数组里 
    console.log(index, value);
    dispatch({
      type: 'ADD_PINGLUN',
      index, //对应下标
      value  //对应值
    });
  }
})

export default connect(
  mapState,
  mapDispatch
)(Commit);