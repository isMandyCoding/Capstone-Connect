import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  sent: [],
  received: []
};

const getters = {
    getSent(messages){
      return state.sent;
    },
    getReceived(messages){
      return state.received;
    },
};

const mutations = {
  setSent: (state, messages) => {
    state.sent = messages;
    // console.log('state',state)
    // console.log('messages', messages)
    // console.log('sent', state.sent)
    // console.log('role', role)
  },
  setReceived: (state, messages) => {
    state.received = messages;
  }
};

const actions = {
  async fetchSentMessages ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/${rootState.auth.role}/messages/${rootState.auth.id}`)
     .then(res => {
       let sent = res.data.length > 0 ? res.data.filter(ele => {
         console.log('ele', ele.sender_role)
         console.log('student role', rootState.auth.role)
         return ele.sender_role === rootState.auth.role
       }) : [];

       commit('setSent', sent);
     })
     .catch(err => err);

  },
  async fetchReceivedMessages ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/${rootState.auth.role}/messages/${rootState.auth.id}`)
     .then(res => {
       let received = res.data.length > 0 ? res.data.filter(ele => ele.sender_role !== rootState.auth.role) : [];
       commit('setReceived', received);
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
