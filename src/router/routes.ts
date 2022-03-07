import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // https://next.router.vuejs.org/guide/advanced/lazy-loading.html
  },
]

export {
  routes,
}
