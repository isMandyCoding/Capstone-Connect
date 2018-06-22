<template>
  <div>
   <div class="wrapper">
   </div>
   <div class="menu-wrapper">

   </div>
    <div class="container">
      <div v-if="isLoggedIn">

        <h1>ADMIN DASHBOARD</h1>
        <sui-menu secondary>
          <sui-menu-item>

            <router-link v-if="isAdmin" to="/admin/new_project" tag="sui-button">
              <sui-button round class="new_project_button">
                  <sui-icon name="plus"></sui-icon> Create Project
               </sui-button>
            </router-link>

            <router-link v-if="isBusiness" to="/business/new_project" tag="sui-button">
              <sui-button round class="new_project_button">
                  <sui-icon name="plus"></sui-icon> Create Project
               </sui-button>
            </router-link>

          </sui-menu-item>

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
        <AdminProjectTable ></AdminProjectTable>
      </div>
      <h2 v-else>Log in to get started.</h2>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AdminMenu from './AdminMenu';
import AdminProjectTable from './AdminProjectTable';

export default {
  name: "AdminProjectsPage",
  computed: {
    ...mapGetters(['isBusiness', 'isAdmin', 'AllOpenProjects', 'isLoggedIn', 'filterByRole']),
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
    AdminProjectTable
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
  color: white;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}

.background {
  height: auto;
	width: 100%;
	background-color: lightgray;
	position: absolute;
	left: 0;
	top: 0;
	display: block;
	align-items: left;
  padding-left: 10%;
  padding-right: 10%;
  z-index: -1;
}
.image-container {
  column-count: 3;
  column-gap: 0;
}

.container {
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

.new_project_button {
  background-color: gray;
  border-radius: 50px;
  color: white;
}
.count {
  font-size:1.5rem;
  color: orange;
}
p {
  color: lightgray;
}

img {
  max-width: 100%;
  padding: 5px;
}
table {
  max-width: 100%;
}

.wrapper {
	height: 95px;
	width: 100%;
	background-image: url("../img/di-maitland-474788-unsplash.jpg");
  background-size: 100%;
	position: absolute;
	left: 0;
	top: 60px;
	display: block;
	align-items: left;
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  z-index: -1;
}

.menu-wrapper {
  height: 68px;
	width: 100%;
	background-color: #3D3D3D;
	position: absolute;
	left: 0;
	top: 155px;
	display: block;
	align-items: left;
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  z-index: -1;
}

</style>
