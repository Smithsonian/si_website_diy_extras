import { getKey, removeKey, setKey } from '@/utils/storageUtils';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

const MODAL_KEY = 'currently-open-modal';

export const useModalsStore = defineStore('modals', () => {
  const showLopezMorales = ref(false);
  const showLeavitt = ref(false);

  const initialize = () => {
    if (import.meta.env.SSR) {
      return;
    }
    const currentlyOpenModal = getKey(MODAL_KEY);
    switch (currentlyOpenModal) {
      case 'leavitt':
        showLeavitt.value = true;
        break;
      case 'lopezMorales':
        showLopezMorales.value = true;
        break;
      default:
      // Do nothing; no modal to open
    }
  };

  if (!import.meta.env.SSR) {
    // Serialize to session storage when modals open and close
    watch([showLeavitt, showLopezMorales], ([newLeavitt, newLopezMorales]) => {
      if (newLeavitt) {
        setKey(MODAL_KEY, 'leavitt');
      } else if (newLopezMorales) {
        setKey(MODAL_KEY, 'lopezMorales');
      } else {
        removeKey(MODAL_KEY);
      }
    });
  }

  return {
    showLeavitt,
    showLopezMorales,
    initialize,
  };
});
