import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  users: [],
  businesses: [],
  students: [],
  access_requests: [],
  user_page: null
};

const getters = {
    allUsers: function (state) {

      return state.users;
    },
    allBusinesses: function (state) {
      return state.businesses;
    },
    allStudents: function (state) {
      return state.students;
    },
    accessRequests: function (state) {
      return state.access_requests;
    },
    getNewUser: state => state.newUser
};

const mutations = {
  setUsers (state, users) {
     state.users = users;
  },
  setBusinesses (state, users) {
    state.businesses = state.users.filter(ele => ele["role"] === "business");
  },
  setStudents (state, users) {
    state.students = state.users.filter(ele => ele["role"] === "students");
  },
  setAccessRequests (state, users) {
    state.access_requests = state.users.filter(ele => ele["is_approved"] === false);
  },
  addUser (state, newUser) {
    state.users.push(newUser);
  },
  clear_new_user (state) {
    state.newUser = null;
  }
};

const actions = {
  async fetchAllusers ({ rootState, commit }) {
     const { token } = rootState.auth;
     const response = await axios.get('http://localhost:8000/users')
     .then(res => {
       console.log("i got the users")
       commit('setUsers', res.data);
       commit('setStudents', res.data);
       commit('setBusinesses', res.data);
       commit('setAccessRequests', res.data);
     })
     .catch(err => console.log(err));

  },
  addNewuser ({ commit, state, newUser }){
    if (!state.newUser){
      return;
    }
    axios.post('/new_user', newUser)
    .then( () => {
      commit('adduser', newUser);
    })
  },
  clearNewuser ({ commit }) {
    commit('clear_new_user')
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
