
import { createApp } from 'vue';
import TDesign from 'tdesign-mobile-vue';
import App from './App.vue';

import './index.css';

const app = createApp(App);

app.use(TDesign).mount('#app');