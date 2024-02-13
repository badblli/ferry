import { defineStore } from 'pinia';

interface TemporaryState {
  selectedItem: any | null; // Seçilen öğe
}

export const useTemporaryStore = defineStore({
  id: 'temporary',
  state: (): TemporaryState => ({
    selectedItem: null,
  }),
  actions: {
    setSelectedItem(item: any): void {
      this.selectedItem = item;
    },
  },
});
