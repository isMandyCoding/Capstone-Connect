<template>
<table v-if="isLoggedIn && AllProjects" class="ui celled table">
  <thead>
    <tr>
      <th>Contact</th>
      <th>Company</th>
      <th>Project Name</th>
      <th>Role</th>
      <th>Project Type</th>
      <th>Committed Student ID</th>
      <th>Delete</th>
  </tr></thead>

  <tbody>
    <tr v-if="AllProjects[0]" v-for="project in AllProjects" :key="project.project_id">

      <td>{{project.name ? project.name : "Untitled" }}</td>
      <td>{{project.company ? project.company : "Unspecified" }}</td>
      <td>
          <router-link v-if="project" :to="`/projects/${project.project_id}`">
            <span class="project_name" >{{project.project_name ? project.project_name : "Untitled"}}</span>
          </router-link>
      </td>
      <td>
          {{project.role_type ? project.role_type : "Unspecified"}}
      </td>
      <td>
        {{project.project_type ? project.project_type : "Unspecified"}}
      </td>
      <td>{{project.committed_student_id ? project.committed_student_id : "None" }}</td>
      <td>
        <sui-button tiny basic color="orange" icon="trash alternate" />
      </td>
    </tr>
  </tbody>

</table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: "AdminProjectTable",
  computed: {
    ...mapGetters(['AllProjects', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchAllProjects'])
  },
  created() {
    console.log('the state is now', this.$store.state.projects.projects)
    this.fetchAllProjects();
  },

}

</script>

<style scoped>

table {
  z-index: 1;
}

.project_name {
  color: orange;
  text-decoration: underline;
}

</style>
