<template>

    <sui-container>

      <router-link v-if="isStudent" to="/student/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>
      <router-link v-if="isAdmin" to="/admin/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>

      <h1>CREATE A PROJECT</h1>

      <sui-form @submit.prevent="handleSubmit">


        <sui-form-field
          v-if="isAdmin"
          <h3>Business contact</h3>
          <input
             type="text"
             placeholder="Enter business ID"
             v-model="newProject.business_id">
        </sui-form-field>

        <sui-form-field>
          <h3>Project title (short, descriptive summary of the project)</h3>
          <input
             type="text"
             placeholder="Ex. Sales dashboard, Insurance marketplace, Health tracker"
             v-model="newProject.project_name">
        </sui-form-field>

        <sui-form-field>
          <h3>Project type</h3>
          <sui-dropdown
            selection
            value="project_type"
            :options="project_types"
            v-model="newProject.project_type"
          />
        </sui-form-field>

        <sui-form-field>
          <h3>What tools or technologies should the student use? (optional)</h3>
          <input
            type="text"
            placeholder="Ex. JavaScript, React, Android, iOS, Python, Java, etc."
            v-model="newProject.tools">
        </sui-form-field>

        <sui-form-field>
          <h3>Description</h3>
          <input
            type="text"
            class="tall"
            placeholder="Describe the main features of this project"
            v-model="newProject.description">
        </sui-form-field>

        <sui-form-field>
          <h3>What business problem does this project solve?</h3>
          <input
            type="text"
            class="medium"
            placeholder="Main objectives"
            v-model="newProject.business_problem">
        </sui-form-field>

        <sui-form-field>
          <h3>Is this project for a web developer or data scientist?</h3>
          <sui-dropdown
            placeholder="Full Stack Web Developer"
            selection
            :options="roles"
            v-model="newProject.role_type"
          />
        </sui-form-field>

        <sui-form-field>
          <h3>Is there an opportunity for the student to get paid for this project?</h3>
          <sui-dropdown
            placeholder="No/Not applicable for capstone projects"
            selection
            :options="payment_options"
            v-model="newProject.paid_opportunities"
          />
        </sui-form-field>


        <sui-button type="submit" color="orange">Submit</sui-button>
      </sui-form>



  </sui-container>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Project",
  computed: {...mapGetters([
    'isLoggedIn',
    'getCurrentProject',
    'isAdmin',
    'isStudent',
    'getBusinesses'
  ]) },
  methods: {
    ...mapActions(['addNewProject']),
    handleSubmit: function(){
      // this.addNewProject()
      this.addNewProject(this.newProject);
    }
  },
  data() {
    return {
      newProject:
      {
               "project_owner_id": null,
               "committed_student_id": null,
               "project_name": "ANOTHER SAMPLE TEST",
               "project_type": "Capstone",
               "tools": "Javascript",
               "paid_opportunities": "this is a capstone project",
               "role_type": "Web Developer",
               "description": "",
               "business_problem": ""
      },
      project_types: [
        { key : 'capstone', text: "Capstone", value: "capstone"},
        { key: "consulting", text: 'Consulting', value: "consulting"},
        { key: "internship", text: 'Internship', value: "internship"},
        { key: "postgrad", text: 'Post-Graduation Project', value: "postgrad"}
      ],
      roles: [
        { key : 'All', text: "All", value: "All"},
        { key: "webdev", text: 'Full Stack Web Developer', value: "Full Stack Web Developer"},
        { key: "datascience", text: 'Data Scientist', value: "Data Scientist"}
      ],
      payment_options: [
        { key : "No", text: "No/Not applicable for capstone projects", value: "No"},
        { key : "Yes", text: "Yes", value: "Yes"}
      ]
    };
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

h3 {
  margin-top: 30px;
  color: gray;
}

h4 {
  margin-top: 0;
  color: gray;
}

.tall {
  height: 200px;
}

.medium {
  height: 150px;
}

sui-container{
  margin-top: 100px !important;
  margin-left: 20% !important;
}


</style>
