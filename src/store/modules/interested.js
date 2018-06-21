import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  interested: [],
};

const getters = {
    allInterested: function (state) {
      return state.interested;
    }
};

const mutations = {
  setInterested: (state, interested) => {
     state.interested = interested;
  }
};

const actions = {
  async fetchAllInterested ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/${rootState.role}/interested/${rootState.id}`)
     .then(res => {
       commit('setInterested', res.data)
     })
     .catch(err => console.log(err));

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
