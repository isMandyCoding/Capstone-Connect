import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import NewProjectForm from './components/NewProjectForm';
import AdminProjectsPage from './components/AdminProjectsPage';
import StudentOpenProjectsList from './components/StudentOpenProjectsList';
import Messages from './components/Messages';
import AsyncComputed from 'vue-async-computed';
import StudentListView from './components/StudentListView';
import StudentCardView from './components/StudentCardView';
import Welcome from './components/Welcome';
import Project from './components/Project';
import BusinessProfile from './components/BusinessProfile';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';
import Bookmarks from './components/Bookmarks';


Vue.use(VueRouter);
Vue.use(SuiVue);
Vue.use(AsyncComputed);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    //{ path: '/', component: ImageList },
    { path: '/', component: Welcome },
    { path: '/upload', component: NewProjectForm },
    { path: '/oauth2/callback', component: AuthHandler },

    //for admin
    { path: '/admin/projects', component: AdminProjectsPage },
    { path: '/users', component: Users},
    { path: '/admin/new_project', component: NewProjectForm },
    { path: '/admin/new_user', component: NewUserForm },

    //for everyone
    { path: '/projects/:id', component: Project },
    { path: '/users/:id', component: BusinessProfile},
    { path: '/messages/:id', component: Messages },
    { path: '/bookmarks/:id', component: Bookmarks},

    //for students
    { path: '/student/projects', component: StudentOpenProjectsList },
    { path: '/student/projects/list_view', component: StudentListView },
    { path: '/student/projects/card_view', component: StudentCardView },

    //for businesses
    { path: '/business/new_project', component: NewProjectForm }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
