
const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/one',
    meta: {
      name: '主页面',
      hidden: true,
    },
  },
  {
    path: '/one',
    name: 'One',
    component: () => import('~/views/one/index.vue'),
    meta: {
      name: '测试页面1',
      hidden: false,
      imgKey: 'test',
    },
  },
  {
    path: '/two',
    name: 'Two',
    component: () => import('~/views/test/index.vue'),
    redirect: '/two/one',
    meta: {
      name: '测试页面2',
      hidden: false,
      imgKey: 'test',
    },
    children: [
      {
        path: '/two/one',
        name: 'TwoOne',
        component: () => import('~/views/test/child/test1.vue'),
        meta: {
          name: '测试页面TwoOne',
          hidden: false,
        },
      },
      {
        path: '/two/two',
        name: 'TwoTwo',
        component: () => import('~/views/test/child/test2.vue'),
        meta: {
          name: '测试页面TwoTwo',
          hidden: false,
        },
      },
      {
        path: '/two/three',
        name: 'TwoThree',
        component: () => import('~/views/test/child/test3.vue'),
        meta: {
          name: '测试页面TwoThree',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import('~/views/About.vue'),
    meta: {
      name: '主页面',
      hidden: false,
      imgKey: 'test',
    },
  },
]

export {
  routes,
}
