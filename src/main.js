import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatNumberWithCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};

app.use(router).mount('#app');
