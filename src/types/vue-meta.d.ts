declare module 'vue-meta' {
    import { Plugin } from 'vue';
    const createMetaManager: () => Plugin;
    export { createMetaManager };
  }