import Mock from 'mockjs';
let list = Mock.mock('/api/list', {
  'list|3': [{
    'id|+1': 0,
    'context': [{
      'type|1': ['宝爸天团', '宝宝树', '萌宝', '萌娃'],
      'title|1': '@cname',
      'cont|1': '@ctitle',
      'goods': '1',
      'guanzhu': false,
      'shoucang': false,
      'pinglun': ['评论内容1', '评论内容2']
    }],

  }]
})
export default list;