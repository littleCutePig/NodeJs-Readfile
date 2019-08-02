import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class FaTie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      cont: '',
      isShow: false,
      type: '最新推荐'
    }
  }
  render() {
    let { list } = this.props;
    let { isShow } = this.state;
    return (
      <>

        <h3>发帖</h3>
        <label htmlFor="" style={{ display: 'block', width: '300' }}>
          <input
            style={{ width: '100%', display: 'block', height: '40px', outli: 'none' }}
            ref={ref => this.title = ref}
            type="text" placeholder='我只是个标题(必填)' />
        </label><br />
        <label htmlFor="" style={{ display: 'block', width: '300' }}>
          <input
            style={{ width: '100%', display: 'block', height: '40px', outli: 'none' }}
            ref={ref => this.cont = ref}
            type="text"
            placeholder='我就是正文(不少于五个字)' />
        </label>
        <button onClick={this.isShowMark}>发到哪个圈子</button><br /><br />
        <Link to='shequ'>
          <button onClick={this.props.toFaBu.bind(this)}>发布</button>
        </Link><br /><br />


        {
          isShow ?
            <div className="mark" >
              {
                list.map(item => (
                  <p
                    key={item.id}
                    onClick={(e) => this.changeType(item.context[0].type)}>
                    {item.context[0].type}
                  </p>
                ))
              }
            </div> : ''
        }
      </>
    );
  }

  isShowMark = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }


  changeType = (value) => {
    // this.props.changeType(value);
    this.setState({
      isShow: !this.state.isShow,
      type: value
    })
  }
}


let mapState = state => {
  return state;
}
let mapDispatch = dispatch => ({
  toFaBu() {
    if (this.cont.value.length < 5) {
      alert('内容不能少于五个字')
    } else if (this.title.value === '') {
      alert('请输入标题')
    } else {
      // console.log(this.title.value)
      // console.log(this.cont.value)
      // console.log(this.state.type)
      let context = {
        type: this.state.type,
        title: this.title.value,
        cont: this.cont.value,
        goods: 0,
        guanzhu: false,
        shoucang: false,
        pinglun: [],
      }
      dispatch({
        type: 'ADD_MSG',
        context
      })
    }

  }
  // changeType(value) {
  //   console.log(value)
  //   dispatch({
  //     type: 'CHANGE_TYPE',//选择圈子 发布内容
  //     value
  //   })
  // }
})

export default connect(
  mapState,
  mapDispatch
)(FaTie);