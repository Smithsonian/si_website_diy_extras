import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createPinia());
});
