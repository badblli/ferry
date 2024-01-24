<template>
  <nav
    class="pb-1 flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
    aria-label="Tabs" role="tablist">
    <button type="button" index={1}
      class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
      id="horizontal-scroll-tab-item-1" data-hs-tab="#horizontal-scroll-tab-1" aria-controls="horizontal-scroll-tab-1"
      role="tab">
      Long tab link 1
    </button>
    <button type="button" index={2}
      class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
      id="horizontal-scroll-tab-item-2" data-hs-tab="#horizontal-scroll-tab-2" aria-controls="horizontal-scroll-tab-2"
      role="tab">
      Long tab link 2
    </button>
    <button type="button" index={3}
      class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
      id="horizontal-scroll-tab-item-3" data-hs-tab="#horizontal-scroll-tab-3" aria-controls="horizontal-scroll-tab-3"
      role="tab">
      Long tab link 3
    </button>
    <button type="button" index={4}
      class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
      id="horizontal-scroll-tab-item-4" data-hs-tab="#horizontal-scroll-tab-4" aria-controls="horizontal-scroll-tab-4"
      role="tab">
      Long tab link 4
    </button>
    <button type="button" index={5}
      class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
      id="horizontal-scroll-tab-item-5" data-hs-tab="#horizontal-scroll-tab-5" aria-controls="horizontal-scroll-tab-5"
      role="tab">
      Long tab link 5
    </button>
  </nav>

  <div class="mt-3">
    <div id="horizontal-scroll-tab-1" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-1" index={1}>
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
      </p>
    </div>
    <div id="horizontal-scroll-tab-2" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-2"
      index={2}>
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
      </p>
    </div>
    <div id="horizontal-scroll-tab-3" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-3"
      index="{3}">
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
      </p>
    </div>
    <div id="horizontal-scroll-tab-4" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-4"
      index="{4}">
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">fourth</em> item's tab body.
      </p>
    </div>
    <div id="horizontal-scroll-tab-5" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-5"
      index="{5}">
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">fifth</em> item's tab body.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tabs: ["Long tab link 1", "Long tab link 2", "Long tab link 3", "Long tab link 4", "Long tab link 5"],
      tabsContent: [
        "This is the first item's tab body.",
        "This is the second item's tab body.",
        "This is the third item's tab body.",
        "This is the fourth item's tab body.",
        "This is the fifth item's tab body."
      ],
      activeTab: 0
    };
  },
  methods: {
    changeTab(index: any) {
      this.activeTab = index;
    }
  }
};
</script>
