let defaultState = {
  list: [],
  type: '最新推荐',
  allCont: [],
  guanzhu: '',
  pinglun: {},
  index: 0
}

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'GET_DATA':
      newState.list = action.value;
      let arr = [];
      action.value.map(item => {
        arr.push(item.context[0])
      })
      newState.allCont = arr;
      console.log(newState.allCont)//全部内容
      return newState;

    case 'ADD_MSG': //发帖
      newState.allCont.unshift(action.context)
      console.log(newState.allCont)
      return newState;

    case 'DIAN_ZAN'://点赞
      console.log(newState.allCont[action.value].goods * 1 + 1)
      // newState.allCont[action.value].goods * 1;
      // console.log(newState.allCont[action.value].goods);
      newState.allCont[action.value].goods = newState.allCont[action.value].goods * 1 + 1
      console.log(newState.allCont[action.value].goods);
      return newState;

    case 'COMMIT_MSG': //评论
      newState.index = action.index;
      console.log(newState.allCont[newState.index])
      return newState;

    case 'ADD_PINGLUN':
      // console.log(action.index)
      newState.allCont[action.index].pinglun.push(action.value);
      console.log(newState.allCont[action.index].pinglun)

      return newState;

    case 'GUAN_ZHU': //关注
      newState.allCont[action.value].guanzhu = !newState.allCont[action.value].guanzhu;
      console.log(newState.allCont[action.value])
      return newState;

    case 'SHOU_CANG': //收藏
      newState.allCont[action.value].shoucang = !newState.allCont[action.value].shoucang;
      console.log(newState.allCont[action.value])
      return newState;


    default:
      return newState;
  }
}

export default reducer;