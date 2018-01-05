import 'bootstrap/dist/css/bootstrap.css';
import '../styles/base.css';
import Vue from 'vue';
import App from '@/components/Main.vue';
import router from '@/router.js';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});