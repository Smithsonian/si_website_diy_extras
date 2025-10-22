import './assets/diy_extras_theme.scss';
import 'video.js/dist/video-js.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import { ViteSSG } from 'vite-ssg/single-page';
import { useModalsStore } from './stores/modals';

export const createApp = ViteSSG(App, ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  const modalsStore = useModalsStore(pinia);
  modalsStore.initialize();
});
