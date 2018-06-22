<template>
<table v-if="isLoggedIn" class="ui celled table">
  <thead>
    <tr>
      <th>Contact</th>
      <th>Company</th>
      <th>Project Name</th>
      <th>Role</th>
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
import { mapGetters } from 'vuex';


export default {
  name: "AdminProjectTable",
  computed: {
    ...mapGetters(['AllProjects', 'isLoggedIn'])
  }

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
