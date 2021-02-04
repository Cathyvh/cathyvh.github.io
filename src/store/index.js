import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startDate: ""
  },
  mutations: {
    setStartDate(state, startDate) {
      state.startDate = startDate;
    },

  },
  
  actions: {},
  modules: {}
});
