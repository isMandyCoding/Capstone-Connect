import axios from 'axios';


const state = {
  projects: [],
  open_projects: [],
  in_progress_projects: [],
  current_project: null,
  requested_info: [],
  bookmarked: [],
  committed: null,
  business_profile_open_projects: [],
  business_profile_in_progress_projects: [],
};

const getters = {
    AllProjects: function (state) {
      return state.projects;
    },
    AllOpenProjects: function (state) {
      return state.open_projects;
    },
    AllInProgressProjects: function (state) {
      return state.in_progress_projects;
    },
    getNewProject: state => state.newProject,
    getOpenProjectsByBusinessId: state => state.business_profile_open_projects,
    getInProgressProjectsByBusinessId: state => state.business_profile_in_progress_projects,
};

const mutations = {
  setProjects: (state, projects) => {
     state.projects = projects;
  },
  addProject: (state, newProject)=> {
    state.projects.push(newProject);
  },
  setProjectPage: (state, project)=> {
    state.current_project = project;
  },
  setBusinessProfileOpenProjects: (state, projects)=> {
    state.business_profile_open_projects = projects;
  },
  setInProgressProjects: (state, projects)=> {
    state.business_profile_in_progress_projects = projects;
  },
  setOpenProjects: (state, projects)=> {
    state.open_projects = projects;
  },
  setInProgressProjects: (state, projects)=> {
    state.in_progress_projects = projects;
  },
  clear_new_project: (state) => {
    state.newProject = null;
  },
  delete_project: (state, project) => {
    console.log(project)
    var projects = state.projects;
    projects.splice(projects.indexOf(project), 1);
  },
  edit_project: (state, edited_project) => {
    console.log('the object sent to mutations was ', edited_project)
    state.projects = state.projects.map(ele => {
      if (ele.project_id === edited_project.project_id){
        return edited_project;
      } else {
        return ele;
      }
    })
  }
};

const actions = {
  async fetchAllProjects ({ commit }) {
     await axios.get('http://localhost:8000/admin/projects')
     .then(res => {
       commit('setProjects', res.data)
       commit('setOpenProjects', res.data.filter(ele => ele.committed_student_id === null))
       commit('setInProgressProjects', res.data.filter(ele => ele.committed_student_id !== null))
     })
     .catch(err => err);

  },

  async getProjectById ({ commit }, project_id){
    await axios.get(`http://localhost:8000/projects/${project_id}`)
    .then(res => {
      commit('setProjectPage', res.data[0]);
    })
    .catch(err => err);
  },

  async deleteProjectById ({ commit }, project){
    await axios.delete(`http://localhost:8000/projects/${project.project_id}`)
    .then(res => {
      if(res.data)
        commit('delete_project', project);
    })
    .catch(err => err);
  },

  addNewProject ({ commit }, newProject ){
    axios.post('http://localhost:8000/admin/new_project', newProject)
    .then( (response) => {
      commit('addProject', response.data[0]);
    })
  },

  async updateProject ({ commit }, editedProject ){
    console.log("the action updateProject was called and the object sent to actions was", editedProject)
    console.log("the action update project is doing a 'put' method for the project id ", editedProject.project_id)

    await axios.put(`http://localhost:8000/projects/${editedProject.project_id}`, editedProject)
    .then( (res) => {
      console.log('res in updateproject action is ', res)
      commit('edit_project', editedProject)
    })
    .catch(err => {
      console.log("The error is here", err)
    });
  },

  async fetchAllOpenProjects ({ commit }) {
    await axios.get('http://localhost:8000/student/projects')
     .then(res => {
       commit('setOpenProjects', res.data)
     })
     .catch(err => err);
  },

  async fetchOpenProjectsByUserId ({ commit }, user_id) {
    await axios.get(`http://localhost:8000/projects/${user_id}/`)
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
