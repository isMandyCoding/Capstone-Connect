import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import projects from './modules/projects';
import messages from './modules/messages';
import interested from './modules/interested';
import users from './modules/users';
import bookmarks from './modules/bookmarks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    projects,
    messages,
    interested,
    users
  }
});
