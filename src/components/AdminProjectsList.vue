<template>
  <div sui-container>
    <div v-if="isLoggedIn">

      <h1>ADMIN DASHBOARD</h1>
      <sui-menu secondary>
        <sui-menu-item right>
             <p><span class="count">30</span> open projects</p>
         </sui-menu-item>
         <sui-menu-item>
             <p><span class="count">6</span> in progress</p>
         </sui-menu-item>
         <sui-menu-item>
             <p><span class="count">0</span> access requests</p>
         </sui-menu-item>
     </sui-menu>

      <AdminMenu
        @clickedRole="setRoleToName"
        @clickedListView="setViewToList"
        @clickedCardView="setViewToCard">
      </AdminMenu>
      <AdminListView ></AdminListView>
    </div>
    <h2 v-else>Log in to get started.</h2>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AdminMenu from './AdminMenu';
import AdminListView from './AdminListView';

export default {
  name: "AdminProjectsList",
  computed: {
    ...mapGetters(['AllOpenProjects', 'isLoggedIn', 'filterByRole']),
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
      this.filterByRole(name);
    }
  },
  created() {
    this.fetchAllProjects();
  },
  components: {
    AdminMenu,
    AdminListView
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
.count {
  font-size:1.5rem;
  color: orange;
}
p {
  color: gray;
}

img {
  max-width: 100%;
  padding: 5px;
}
table {
  max-width: 100%;
}
</style>
