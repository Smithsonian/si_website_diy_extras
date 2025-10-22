import { createPinia } from 'pinia';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createPinia());
});
