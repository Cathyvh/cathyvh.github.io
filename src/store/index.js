import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startDate: "2021-02-01"
  },
  mutations: {
    setStartDate(state, startDate) {
      state.startDate = startDate;
    }
  },
  actions: {},
  modules: {}
});
