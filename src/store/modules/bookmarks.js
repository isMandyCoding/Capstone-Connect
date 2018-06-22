import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  bookmarks: []
};

const getters = {
    getBookmarks(Bookmarks){
      return state.sent;
    }
};

const mutations = {
  setBookmarks: (state, Bookmarks) => {
    state.sent = Bookmarks;
  }
};

const actions = {
  async fetchBookmarks ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/bookmarks/${rootState.auth.id}`)
     .then(res => {
       commit('bookmarks', res);
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
