<template>
  <div sui-container>
    <div v-if="isLoggedIn">
      <h1>PERMISSIONS</h1>


        <PermissionsMenu></PermissionsMenu>

    </div>
    <h2 v-else>Log in to get started.</h2>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AdminMenu from './AdminMenu';
import AdminListView from './AdminListView';
import PermissionsMenu from './PermissionsMenu';

export default {
  name: "AdminPermissions",
  computed: {
    ...mapGetters(['AllOpenProjects', 'isLoggedIn']),
    role: {
      get: function (){
        return this.role;
      },
      set: function (role){
        this.role = role;
      }
    }
  },
  methods: {
    ...mapActions(['fetchAllProjects', 'filterByDataScience']),
    setViewToList(){ this.currentView = "list" },
    setViewToCard(){ this.currentView = "card" },
    setRoleToName(name){
      this.role = name;
      filterByRole(name);
    }
  },
  created() {
    this.fetchAllProjects();
  },
  components: {
    AdminMenu,
    AdminListView,
    PermissionsMenu
  },
  data(){
    return {
      type: "",
      currentView: "list"
   }
 }
};
</script>

<style scoped>
h1 {
  font-family: "museo-sans", sans-serif;
  color: orange;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
table {
  max-width: 100%;
}
</style>
