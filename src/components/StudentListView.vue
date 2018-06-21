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
      <th>View</th>
      <th>Save</th>
  </tr></thead>

  <tbody>
    <tr v-for="project in AllOpenProjects" :key="project.project_id">

      <td>{{project.contact_name}}</td>
      <td>{{project.contact_company}}</td>
      <td>
        <i v-if="project.role_type.includes('Data')" class="flask icon"></i>
        <i v-if="project.role_type.includes('Web')" class="globe icon"></i>
        {{project.project_type}}
      </td>
      <td>{{project.tools.slice(0, 120)}}</td>
      <td @click="updateCurrentProject(project)">
        <sui-button tiny basic color="orange" content="View"  />
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
    // isDataScience: function(role_type){
    //   console.log('role',role_type)
    //   return role_type.indexOf("Data") !== -1;
    // },
    // isWebDev: function(role){
    //   return role_type.indexOf("Web") !== -1;
    // }
  },
  methods: {
    updateCurrentProject: function(project){
      this.$store.commit('setCurrentProject', project)
      this.$router.push({ path: "/student/projects/project"})
    }
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
