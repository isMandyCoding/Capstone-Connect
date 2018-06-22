<template>
<div>
  <div class="wrapper">
    <h1>
      <i v-if="project.role_type && project.role_type.includes('Data')" class="flask icon"></i>
      <i v-if="project.role_type && project.role_type.includes('Web')" class="cloud icon"></i>
      {{project.project_name}}
    </h1>
  </div>

  <div class="menu-wrapper">
  </div>

  <div class="container">

    <sui-menu secondary>
      <sui-button class="highlight">
        <router-link v-if="isStudent" to="/student/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>
        <router-link v-if="isAdmin" to="/admin/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>
      </sui-button>
      <sui-button v-if="isStudent" class="highlight-background" name="Commit">Commit to Project</sui-button>
      <sui-button v-if="isStudent" class="highlight"  name="Request"><i class="question circle outline icon"></i> Request Info</sui-button>
      <sui-button v-if="isStudent" class="highlight"  name="Message"><i class="envelope outline icon"></i> Message</sui-button>
      <sui-button v-if="isStudent || isAdmin" class="highlight"  name="Bookmark"><i class="bookmark outline icon"></i> Bookmark</sui-button>
      <sui-button v-if="isBusiness || isAdmin" class="highlight"  name="Edit"><i class="edit outline icon"></i> Edit</sui-button>
      <sui-button v-if="isBusiness || isAdmin" class="highlight"  name="Delete"><i class="trash alternate icon"></i> Delete</sui-button>
    </sui-menu>

    <div class="spacer">
    </div>

    <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <h3 v-if="isStudent || isAdmin">Company</h3>
        <p v-if="isStudent || isAdmin">{{project.company}}</p>


        <h3>Role</h3>
        <p>{{project.role_type}}</p>


        <h3 v-if="project.paid_opportunities">Paid Opportunities</h3>
        <p v-if="project.paid_opportunities">{{project.paid_opportunities}}</p>

        <h3>Contact</h3>
        <p>{{project.name}}</p>
        <p v-if="project.website"><i class="linkify icon"></i>{{project.website}}</p>
        <p v-if="project.email"><i class="envelope icon"></i>{{project.email}}</p>
        <p v-if="project.phone"><i class="phone icon"></i>{{project.phone}}</p>

        <h3 v-if="project.timestamp">Created</h3>
        <p v-if="project.timestamp"><i class="calendar alternate outline icon"></i>{{project.timestamp}}</p>

        <h3 v-if="isAdmin">Committed Student</h3>
        <p v-if="isAdmin">{{project.committed_student_id ? project.committed_student_id : "None"}}</p>
      </sui-grid-column>
      <sui-grid-column>
        <h3>Description</h3>
        <p>{{project.description}}</p>

        <h3 v-if="project.business_problem">Business Problem</h3>
        <p v-if="project.business_problem">{{project.business_problem}}</p>

        <h3>Tools</h3>
        <p>{{project.tools}}</p>
      </sui-grid-column>
    </sui-grid-row>

    </sui-grid>

  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  name: "Project",
  computed: {
    ...mapGetters(['isLoggedIn', 'isAdmin', 'isStudent', 'isBusiness']),
    project() {
      return this.$store.state.projects.project_page
    }
  },
  created (){
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions(['getProjectById']),

    fetchData: function (){
      this.getProjectById(this.$route.params.id)
        .then(res => {
          console.log('this.$store.state.projects', this.$store.state.projects)
        })
        // console.log('this.project', this.project)
        // console.log('getprojectby id', this.getProjectById(this.$route.params.id))
    }
  }
}

</script>

<style scoped>

.container {
  margin-top: 110px !important;
  margin-left: 15%;
  margin-right: 15%;
}

sui-menu {
  margin-bottom: 150px !important;
}

h4:hover {
  color: black;
}

h1{
  color: white;
  font-family: "museo-sans", sans-serif;
  font-weight: 100;
}

h3{
  color: orange;
  margin-bottom: 5px;
}

h4{
  margin-top: 0;
  color: white;
  font-weight: 100;
}

.highlight {
  background-color: dimgray;
  color: white;
}

.highlight-background {
  color: white !important;
  background-color: orange !important;
}

.wrapper {
	height: 100px;
	width: 100%;
	background-image: url("../img/joel-bader-478853-unsplash.jpg");
  background-size: 100%;
	position: absolute;
	left: 0;
	top: 60px;
	display: block;
	align-items: left;
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
}

.menu-wrapper {
  height: 62px;
	width: 100%;
	background-color: #3D3D3D;
	position: absolute;
	left: 0;
	top: 160px;
	display: block;
	align-items: left;
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  z-index: -1;
}

.spacer {
  height: 15px;
}
</style>
