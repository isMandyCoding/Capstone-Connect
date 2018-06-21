<template>
  <div sui-container>
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
