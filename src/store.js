import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    data: [],
    selectedType: 'all',
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setSelectedType(state, type) {
      state.selectedType = type
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://jobs.tipiteq.com/dummy_data.json')
        .then((response) => {
          commit('setData', response.data.data);
        });
    },
  },
  getters: {
    data: (state) => state.data,
    selectedType: (state) => state.selectedType,
  },
});
