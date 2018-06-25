import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

// const state = {
//   token: window.localStorage.getItem('imgur_token'),
//   role: null,
//   id: null
// };
//

//
// const mutations = {
//   setToken: (state, token) => {
//     state.token = token;
//   },
//   setRole: (state, role) => {
//     state.role = role;
//   },
//   setId: (state, id) => {
//     state.id = id;
//   },
//   setAdmin: (state, boolean) => {
//     state.isAdmin = boolean;
//   }
// };

const state = {
  token: window.localStorage.getItem('imgur_token'),
  role: "admin",
  id: 28,
  email: "anna.peralta@galvanize.com"
};

const getters = {
  isLoggedIn: () => true ,//state => !!state.token,
  isAdmin: state => state.role === "admin",
  isStudent: state => state.role === "student",
  isBusiness: state => state.role === "business",
  getId: state => state.id
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
