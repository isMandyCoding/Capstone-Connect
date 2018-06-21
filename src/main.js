import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
//import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import AdminProjectsList from './components/AdminProjectsList';
import StudentOpenProjectsList from './components/StudentOpenProjectsList';
import Messages from './components/Messages';
import AsyncComputed from 'vue-async-computed';
import StudentListView from './components/StudentListView';
import StudentCardView from './components/StudentCardView';
import Welcome from './components/Welcome';
import Project from './components/Project';
import BusinessProfile from './components/BusinessProfile';
import AdminPermissions from './components/AdminPermissions';


Vue.use(VueRouter);
Vue.use(SuiVue);
Vue.use(AsyncComputed);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    //{ path: '/', component: ImageList },
    { path: '/home', component: Welcome },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/admin/projects', component: AdminProjectsList },
    { path: '/projects/:id', component: Project },
    { path: '/admin/permissions', component: AdminPermissions},
    { path: '/profiles/:id', component: BusinessProfile},
    { path: '/student/projects', component: StudentOpenProjectsList },
    { path: '/student/messages', component: Messages },
    { path: '/student/projects/list_view', component: StudentListView },
    { path: '/student/projects/card_view', component: StudentCardView },
    { path: '/business/projects', component: BusinessProfile },
    { path: '/admin/new_project', component: UploadForm },
    { path: '/business/new_project', component: UploadForm }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
