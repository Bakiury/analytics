import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './plugins/chart.ts';

createApp(App)
    .use(router)
    .mount('#app');
