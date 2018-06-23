<template>
<div>
  <div class="wrapper">
  </div>
  <div class="menu-wrapper">

  </div>
   <div class="container">
    <div v-if="isLoggedIn && isStudent">
      <h1>OPEN PROJECTS</h1>
      <SecondaryMenu
        @clickedRole="setRoleToName"
        @clickedListView="setViewToList"
        @clickedCardView="setViewToCard">
      </SecondaryMenu>
      <StudentListView v-if="currentView === 'list'"></StudentListView>
      <StudentCardView v-else :AllOpenProjects="AllOpenProjects"></StudentCardView>
    </div>
    <h2 v-else>Log in to get started.</h2>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SecondaryMenu from './SecondaryMenu';
import StudentListView from './StudentListView';
import StudentCardView from './StudentCardView';

export default {
  name: "StudentOpenProjectsList",
  computed: {
    ...mapGetters(['AllOpenProjects', 'isLoggedIn', 'isAdmin', 'isStudent']),
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
    ...mapActions(['fetchAllOpenProjects', 'filterByDataScience']),
    setViewToList(){ this.currentView = "list" },
    setViewToCard(){ this.currentView = "card" },
    setRoleToName(name){
      this.role = name;
      filterByRole(name);
    }
  },
  created() {
    this.fetchAllOpenProjects();
  },
  components: {
    SecondaryMenu,
    StudentListView,
    StudentCardView
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

img {
  max-width: 100%;
  padding: 5px;
}
table {
  max-width: 100%;
}
.container {
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

.wrapper {
	height: 95px;
	width: 100%;
	background-image: url("../img/klemen-tusar-522472-unsplash.jpg");
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
