<template>
  <div class="cards">
        <sui-dropdown
          fluid
          multiple
          :options="skills"
          placeholder="Tools"
          search
          selection
          v-model="current.skills"
        />
    <sui-card-group :items-per-row="3">

      <sui-card v-for="project in AllOpenProjects" :key="project.project_id">
        <sui-card-content>
          <sui-card-header class="highlight">
            <router-link v-if="project" :to="`/projects/${project.project_id}`">
              <span class="project_name" >{{project.project_name ? project.project_name : "Untitled"}}</span>
            </router-link>
          </sui-card-header>
          <sui-card-meta >{{project.contact_company}}</sui-card-meta>
          <sui-card-description>
            <label>Tools</label>
            <p>{{project.tools}}</p>
            <label>Description</label>
            <p>{{project.description.slice(0, 160).concat('...')}}</p>
          </sui-card-description>
        </sui-card-content>

        <sui-button @click="updateCurrentProject(project)" attached="bottom">
          <sui-icon name="search plus" /> View Project
        </sui-button>
      </sui-card>

    </sui-card-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "StudentCardView",
  computed: mapGetters(['AllOpenProjects', 'isLoggedIn']),
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
        { key: 'design', text: 'Graphic Design', value: 'design' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'ia', text: 'Information Architecture', value: 'ia' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { key: 'meteor', text: 'Meteor', value: 'meteor' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' },
        { key: 'ui', text: 'UI Design', value: 'ui' },
        { key: 'ux', text: 'User Experience', value: 'ux' },
      ]
    }
  }
}

</script>

<style scoped>
.cards {
  margin-top: 7px;
}
label {
  font-weight: bold;
}
.highlight {
  color: orange !important
}
</style>
