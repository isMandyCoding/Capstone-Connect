// import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';

// const state = {
//   token: window.localStorage.getItem('imgur_token'),
//   role: null,
//   id: null
// };


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
let user = JSON.parse(window.localStorage.getItem('currentUser')) || null
const state = {
  role: user ? user.role : "",
  id: user ? user.user_id : null,
  email: user ? user.email : ""
};

const getters = {
  isLoggedIn: state => !!state.id,
  isAdmin: state => state.role === "admin",
  isStudent: state => state.role === "student",
  isBusiness: state => state.role === "business",
  getId: state => state.id
};

const mutations = {
  setUser: (state, user) => {
    state.role = user ? user.role : "";
    state.id = user ? user.user_id : null;
    state.email = user ? user.email : "";
  }
};

const actions = {
  login: ({commit}, userEmail) => {
    // api.login();
    axios.post('http://localhost:8000/login', { email: userEmail })
    .then(response => {
      if(!response.data.error){
        window.localStorage.setItem('currentUser', JSON.stringify(response.data));

        commit('setUser', response.data)
        let uri = response.data.role === 'business' ? `/users/${response.data.user_id}` : `/${response.data.role}/projects`

        router.push(uri);
      }
      else{
        console.log(response.data.error)
      }
    })
  },
  logout: ({ commit }) => {
    commit('setUser', null);
    window.localStorage.removeItem('currentUser');
    router.push('/')
  }
  // finalizeLogin: ({ commit }, hash) => {
  //   const query = qs.parse(hash.replace('#', ''));
  //
  //   commit('setToken', query.access_token);
  //   window.localStorage.setItem('imgur_token', query.access_token);
  //   router.push('/');
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
}
