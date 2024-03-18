import { ref } from 'vue';

export function useFetch() {
  const fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data');
    }
  };

  return { fetchData };
}

export const isLoading = ref(false);