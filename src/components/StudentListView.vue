<template>
<table v-if="isLoggedIn" class="ui celled table">
  <thead>
    <tr>
      <th>Contact</th>
      <th>Company</th>
      <th>
        <select class="ui dropdown">
            <option value="">Project Type</option>
            <option value="capstone">Capstone</option>
            <option value="consulting">Consulting</option>
            <option value="internship">Internship</option>
            <option value="postgrad">Post-Graduation Project</option>
        </select>
      </th>
      <th>
          <sui-dropdown
            fluid
            multiple
            :options="skills"
            placeholder="Tools"
            search
            selection
            v-model="current.skills"
          />
      </th>
      <th>Title</th>
      <th>Save</th>
  </tr></thead>

  <tbody>
    <tr v-for="project in AllOpenProjects" :key="project.project_id">

      <td>{{project.name ? project.name : "No name given"}}</td>
      <td>{{project.company ? project.company: "No company given"}}</td>
      <td>
        <i v-if="project.role_type.includes('Data')" class="flask icon"></i>
        <i v-if="project.role_type.includes('Web')" class="cloud icon"></i>
        {{project.project_type}}
      </td>
      <td>{{project.tools.slice(0, 120)}}</td>
      <td>
        <router-link v-if="project" :to="`/projects/${project.project_id}`">
          <span class="project_name" >{{project.project_name ? project.project_name : "Untitled"}}</span>
        </router-link>
      </td>
      <td>
        <sui-button tiny basic color="orange"  icon="bookmark outline" />
      </td>


    </tr>
  </tbody>

</table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { router } from 'vue-router';

export default {
  name: "StudentListView",
  computed: {
    ...mapGetters(['AllOpenProjects', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchAllProjects'])
  },
  created() {
    this.fetchAllProjects()
  },
  data(){

    return {
      current: {
        skills: []
      },
      skills: [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' }
      ]
    }
  }
}

</script>

<style scoped>
</style>
