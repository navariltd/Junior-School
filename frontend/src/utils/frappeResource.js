import { reactive } from 'vue';
import { call } from 'frappe-ui';

export function useFrappeResource(url, params = {}, auto = false) {
  const state = reactive({
    data: null,
    loading: false,
    error: null,
  });

  const fetch = async () => {
    try {
      state.loading = true;
      const response = await call('POST', url, params);
      state.data = response.message;
    } catch (err) {
      state.error = err.message;
    } finally {
      state.loading = false;
    }
  };

  if (auto) fetch();
  return { ...state, fetch };
}
