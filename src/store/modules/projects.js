import axios from 'axios';


const state = {
  projects: [],
  project_page: 'null',
  requested_info: [],
  bookmarked: [],
  committed: null,
  project_page_open_projects: [],
  project_page_in_progress_projects: []
};

const getters = {
    AllProjects: function (state) {
      return state.projects;
    },
    AllOpenProjects: function (state) {
      return state.projects;
    },
    getNewProject: state => state.newProject,
    getOpenProjectsByBusinessId: state => state.project_page_open_projects,
    getInProgressProjectsByBusinessId: state => state.project_page_in_progress_projects,
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
  setOpenProjects: (state, projects)=> {
    state.project_page_open_projects = projects;
  },
  setInProgressProjects: (state, projects)=> {
    state.project_page_in_progress_projects = projects;
  },
  clear_new_project: (state) => {
    state.newProject = null;
  }
};

const actions = {
  async fetchAllProjects ({ commit }) {
     await axios.get('http://localhost:8000/admin/projects')
     .then(res => {
       commit('setProjects', res.data)
     })
     .catch(err => err);

  },

  async getProjectById ({ commit }, id){
    await axios.get(`http://localhost:8000/projects/${id}`)
    .then(res => {
      commit('setProjectPage', res.data[0]);
    })
    .catch(err => err);
  },

  addNewProject ({ commit }, newProject ){
    axios.post('http://localhost:8000/admin/new_project', newProject)
    .then( () => {
      commit('addProject', newProject);
    })
  },

  async fetchAllOpenProjects ({ commit }) {
    await axios('http://localhost:8000/student/projects')
     .then(res => {
       commit('setProjects', res.data)
     })
     .catch(err => err);
  },

  async fetchOpenProjectsById ({ commit }, id) {
    await axios('http://localhost:8000/users/:id/projects')
     .then(res => {
       commit('setProjects', res.data)
     })
     .catch(err => err);
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
    commit('setCurrentProject', project);
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
