import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  sent: [],
  received: []
};

const getters = {
    getSent(state){
      return state.sent;
    },
    getReceived(state){
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
     const response = await axios.get(`http://localhost:8000/messages/${rootState.auth.id}`)
     .then(res => {
       let sent = res.data.length > 0 ? res.data.filter(ele => {
         return ele.sender_id === rootState.auth.id
       }) : [];

       commit('setSent', sent);
     })
     .catch(err => err);

  },
  async fetchReceivedMessages ({ rootState, commit }) {
     const response = await axios.get(`http://localhost:8000/messages/${rootState.auth.id}`)
     .then(res => {
       let received = res.data.length > 0 ? res.data.filter(function(ele){
         return ele.recipient_id === rootState.auth.id
       }) : [];

       commit('setReceived', received);
     })
     .catch(err => err)
   }

}

export default {
  state,
  getters,
  actions,
  mutations
}
