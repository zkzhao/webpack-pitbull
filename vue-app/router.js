import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const NotFound = { template: '<p>Page not found</p>' }
const Foo = { template: '<p>home page</p>' }
const Bar = { template: '<p>about page</p>' }

const routes = [
  { path: '/', component: NotFound },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({ routes });

export default router;