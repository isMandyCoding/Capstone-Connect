import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
import axios from 'axios';


const state = {
  projects: [],
  project_page: 'null',
  requested_info: [],
  bookmarked: [],
  committed: null
};

const getters = {
    AllProjects: function (state) {
      return state.projects;
    },
    AllOpenProjects: function (state) {
      return state.projects;
    },
    getNewProject: state => state.newProject
};

const mutations = {
  setProjects: (state, projects) => {
     state.projects = projects;
  },
  addProject: (state, newProject)=> {
    state.projects.push(newProject);
  },
  setProjectPage: (state, project)=> {
    state.project_page = project;

  },
  clear_new_project: (state) => {
    state.newProject = null;
  }
};

const actions = {
  async fetchAllProjects ({ rootState, commit }) {
     const { token } = rootState.auth;
     const response = await axios.get('http://localhost:8000/admin/projects')
     .then(res => {
       commit('setProjects', res.data)
     })
     .catch(err => console.log(err));

  },

  async getProjectById ({ commit, state }, id){
    const response = await axios.get(`http://localhost:8000/projects/${id}`)
    .then(res => {
      console.log('store res', res[0])
      commit('setProjectPage', res.data[0]);
    })
    .catch(err => console.log(err));
  },

  addNewProject ({ commit, state}, newProject ){
    axios.post('http://localhost:8000/admin/new_project', newProject)
    .then( () => {
      commit('addProject', newProject);
    })
  },

  async fetchAllOpenProjects ({ rootState, commit }) {
     const response = await axios('http://localhost:8000/student/projects')
     .then(res => {
       commit('setProjects', res.data)
     })
     .catch(err => console.log(err));
  },

  filterByRole ({rootState, commit}, role){
    let filtered = rootState.projects.projects.filter(function(ele){
      return ele.role_type.indexOf(role) !== -1;
    })
    commit('setProjects', filtered)
  },
  filterById ({rootState, commit}, id){
    let project = rootState.projects.projects.filter(function(ele){
      return ele.project_id === id;
    })[0];
    console.log('filtering for ', project)
    commit('setCurrentProject', project);
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
