import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import '@/style/reset.scss';

import HospitalTop from '@/components/hospital_top/index.vue';
import HosipitalBottom from '@/components/hospital_bottom/index.vue';
import router from './router';
const app = createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HosipitalBottom', HosipitalBottom);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
