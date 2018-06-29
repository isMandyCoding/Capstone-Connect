<template>
  <div>
    <div class="wrapper">
    </div>
    <div class="container">


      <h1>EDIT A PROJECT</h1>

      <sui-form @submit.prevent="handleSubmit">

        <sui-form-field v-if="isAdmin">
          <h3>Business Contact</h3>
          <input
             type="text"
             :placeholder="`${project ? project.project_owner_id : 'None'}`"
             v-model="editedProject.project_owner_id"
          >
        </sui-form-field>

        <sui-form-field v-if="isAdmin">
          <h3>Committed Student</h3>
          <input
             type="text"
             :placeholder="`${project ? project.committed_student_id : 'None'}`"
             v-model="editedProject.committed_student_id">
        </sui-form-field>

        <sui-form-field>
          <h3>Project Title</h3>
          <p>Should be a short, descriptive summary of the project.</p>
          <input
             type="text"
             :placeholder="`${project ? project.project_name : 'Untitled'}`"
             v-model="editedProject.project_name">
        </sui-form-field>

        <sui-form-field>
          <h3>Role Type</h3>
          <p>Is this project for a web developer or data scientist?</p>
          <sui-dropdown
            :placeholder="`${project ? project.role_type : 'Unspecified'}`"
            selection
            :options="roles"
            v-model="editedProject.role_type"
          />
        </sui-form-field>

        <sui-form-field>
          <h3>Project type</h3>
          <p>Is this a capstone project or another type of opportunity?</p>
          <sui-dropdown
            selection
            value="project_type"
            :placeholder="`${project ? project.project_type : 'Unspecified'}`"
            :options="project_types"
            v-model="editedProject.project_type"
          />
        </sui-form-field>

        <sui-form-field>
          <h3>Tools</h3>
          <p>What tools or technologies should the student use? (optional)</p>
          <input
            type="text"
            :placeholder="`${project ? project.tools : 'Unspecified/Student\'s choice'}`"
            v-model="editedProject.tools">
        </sui-form-field>

        <sui-form-field>
          <h3>Description</h3>
          <p>Describe the scope and main features of this project.</p>
          <input
            type="text"
            class="tall"
            :placeholder="`${project ? project.description : 'No description'}`"
            v-model="editedProject.description">
        </sui-form-field>

        <sui-form-field>
          <h3>Business Problem</h3>
          <p>What business problem does this project solve? This helps the student understand the context and purpose of the project.</p>
          <input
            type="text"
            class="medium"
            :placeholder="`${project ? project.business_problem : 'Business problem'}`"
            v-model="editedProject.business_problem">
        </sui-form-field>



        <sui-form-field>
          <h3>Is there an opportunity for the student to get paid for this project?</h3>
          <sui-dropdown
            :placeholder="`${project ? project.paid_opportunities : 'Please choose one'}`"
            selection
            :options="payment_options"
            v-model="editedProject.paid_opportunities"
          />
        </sui-form-field>


        <sui-button type="submit" color="orange">
            Submit
        </sui-button>
      </sui-form>



  </div>
</div>
</template>

<script>
import { router } from '../main';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "EditProjectForm",
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'getCurrentProject',
      'isAdmin',
      'isStudent',
      'getBusinesses',
    ]),
    project() {
      return this.$store.state.projects.current_project;
    }
   },
  created (){
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions([
      'updateProject',
      'fetchAllOpenProjects',
      'getProjectById']
    ),
    handleSubmit: function(){
      this.updateProject(this.editedProject);
      console.log("i handled submit of this object ", this.editedProject)
      this.fetchAllOpenProjects();
      router.go(-1);
    },
    fetchData: function (){
      this.getProjectById(this.$route.params.id)
        .then((res) => {
          console.log('params id', this.$route.params.id)
          console.log('project in fetchdata ', this.$store.state.projects.current_project)
          this.editedProject = this.$store.state.projects.current_project;
        })
    }
  },
  data() {
    return {
      editedProject:
      {
               "project_id": Number(this.$route.params.id),
               "project_owner_id": this.project ? Number(this.project.project_owner_id) : null,
               "committed_student_id":  this.project ? Number(this.project.committed_student_id) : null,
               "project_name": this.project ? this.project.project_name : 'Untitled',
               "project_type": this.project ? this.project.project_type : 'Unspecified',
               "tools": this.project ? this.project.tools : 'Unspecified',
               "paid_opportunities": this.project ? this.project.paid_opportunities : 'Unspecified',
               "role_type": this.project ? this.project.role_type : 'Unspecified',
               "description": this.project ? this.project.description : '',
               "business_problem": this.project ? this.project.business_problem : ''
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
  color: white;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 20px;
  margin-bottom: 10px;
}

h3 {
  margin-top: 30px;
  color: orange;
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

.container{
  margin-top: 60px;
  margin-left: 20%;
  margin-right: 20%;
}


.wrapper {
	height: 110px;
	width: 100%;
	background-image: url('../img/gerome-bruneau-65759-unsplash.jpg');
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

</style>
