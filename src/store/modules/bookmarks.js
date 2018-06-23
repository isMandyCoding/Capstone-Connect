import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  bookmarks: []
};

const getters = {
    getBookmarks(messages){
      return state.bookmarks;
    }
};

const mutations = {
  setSent: (state, messages) => {
    state.sent = messages;
  },
  setReceived: (state, messages) => {
    state.received = messages;
  }
};

const actions = {
  async fetchBookmarks ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/bookmarks/${rootState.auth.id}`)
     .then(res => {

       commit('setBookmarks', res.data);
     })
     .catch(err => err);

  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
