<template>
<table v-if="isLoggedIn" class="ui celled table">
  <thead>
    <tr>
      <th>Contact</th>
      <th>Company</th>
      <th>Project Name</th>
      <th>Project Type</th>
      <th>Committed Student</th>
      <th>Delete</th>
  </tr></thead>

  <tbody>
    <tr v-for="project in AllProjects" :key="project.project_id">

      <td>{{project.name}}</td>
      <td>{{project.company}}</td>
      <td
        <router-link :to="`/projects/${project.project_id}`">
        <span class="project_name">{{project.project_name}}</span>
        </router-link>
      </td>
      <td>
        <i v-if="project.role_type.includes('Data')" class="flask icon"></i>
        <i v-if="project.role_type.includes('Web')" class="cloud icon"></i>
        {{project.project_type}}
      </td>
      <td>{{project.committed_student_id}}</td>
      <td>
        <sui-button tiny basic color="orange" icon="trash alternate" />
      </td>
    </tr>
  </tbody>

</table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "AdminListView",
  computed: {
    ...mapGetters(['AllProjects', 'isLoggedIn'])
    // isDataScience: function(role_type){
    //   console.log('role',role_type)
    //   return role_type.indexOf("Data") !== -1;
    // },
    // isWebDev: function(role){
    //   return role_type.indexOf("Web") !== -1;
    // }
  },
  methods: {

  }

}

</script>

<style scoped>
.project_name {
  color: orange;
  text-decoration: underline;
}

</style>
