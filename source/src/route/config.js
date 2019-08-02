import {
  Index,
  Home,
  FaTie,
  Knows,
  Mine,
  SheQu,
  Commit,
  GuanZhu,
  Shop,
  ShouCang
} from '../views/Exprot';

let route = [{
  //导航页
  path: '/',
  component: Index,
  route: [
    {
      path: '/home',
      component: Home,//首页
    },
    {
      path: '/shequ',
      component: SheQu,//社区
    },
    {
      path: '/fatie',
      component: FaTie,//发帖
    },
    {
      path: '/knows',
      component: Knows, //知识库
    },
    {
      path: '/mine',
      component: Mine,//我的
      route: [
        {
          path: '/mine/guanzhu',
          component: GuanZhu
        },
        {
          path: '/mine/shoucang',
          component: ShouCang
        },
      ]
    },
    {
      path: '/commit',
      component: Commit,//我的
    },
    {
      path: '/shop',
      component: Shop,//我的
    }
  ]
}];

export default route;