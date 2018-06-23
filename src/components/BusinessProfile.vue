<template>
  <div>


    <div class="wrapper">

      <h1>
        {{profile.name ? profile.name : 'loading...'}}  {{profile.company ? "at " + profile.company : 'loading...'}}
      </h1>

    </div>

    <div class="menu-wrapper">
    </div>

    <div class="container">


      <sui-menu secondary>

          <router-link v-if="isAdmin" to="/admin/new_project" tag="sui-button">
            <sui-button round class="new_project_button">
                <sui-icon name="plus"></sui-icon> Create Project
             </sui-button>
          </router-link>
          <router-link v-if="isBusiness" to="/business/new_project" tag="sui-button">
            <sui-button round class="new_project_button">
                <sui-icon name="plus"></sui-icon> Create Project
             </sui-button>
          </router-link>


         <sui-menu-menu position="right">
              <sui-button class="highlight">
                <router-link v-if="isStudent" to="/student/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>
                <router-link v-if="isAdmin" to="/admin/projects"><h4><i class="angle double left icon"></i>Back</h4></router-link>
              </sui-button>
              <sui-button v-if="isStudent" class="highlight-background" name="Commit">Commit to Project</sui-button>
              <sui-button v-if="isStudent" class="highlight"  name="Request"><i class="question circle outline icon"></i> Request Info</sui-button>
              <sui-button v-if="isStudent || isAdmin" class="highlight"  name="Message"><i class="envelope outline icon"></i> Message</sui-button>
              <sui-button v-if="isBusiness || isAdmin" class="highlight"  name="Edit"><i class="edit outline icon"></i> Edit</sui-button>
              <sui-button v-if="isBusiness || isAdmin" class="highlight"  name="Delete"><i class="trash alternate icon"></i> Delete</sui-button>
              <sui-button v-if="isStudent" class="highlight" basic name="Message"><i class="envelope outline icon"></i> Message</sui-button>
        </sui-menu-menu>

      </sui-menu>

        <h3>Contact</h3>
        <p v-if="profile.website"><i class="linkify icon"></i>{{profile.website}}</p>
        <p v-if="profile.email"><i class="envelope icon"></i>{{profile.email}}</p>
        <p v-if="profile.phone"><i class="phone icon"></i>{{profile.phone}}</p>

        <h3 v-if="profile.timestamp">Created</h3>
        <p v-if="profile.timestamp"><i class="calendar alternate outline icon"></i>{{profile.timestamp}}</p>


        <h3>Open Projects</h3>

        <table v-if="isLoggedIn" class="ui celled table">
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Role</th>
              <th>Project Type</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="project in projects" :key="project.project_id">

              <td>{{project.project_id}}</td>
              <td>
                  <router-link :to="`/projects/${project.project_id}`">
                    <span class="project_name">{{project.project_name ? project.project_name : "Unspecified"}}</span>
                  </router-link>
              </td>
              <td>
                <i v-if="project.role_type.includes('Data')" class="flask icon"></i>
                <i v-if="project.role_type.includes('Web')" class="cloud icon"></i>
              </td>
              <td>
                {{project.project_type ? project.project_type : "Unspecified"}}
              </td>
            </tr>
          </tbody>

        </table>



        <h3 v-if="isAdmin || isBusiness">In Progress</h3>

        <table v-if="isLoggedIn" class="ui celled table">
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Role</th>
              <th>Project Type</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="project in projects" :key="project.project_id">

              <td>{{project.project_id}}</td>
              <td>
                  <router-link :to="`/projects/${project.project_id}`">
                    <span class="project_name">{{project.project_name ? project.project_name : "Untitled"}}</span>
                  </router-link>
              </td>
              <td>
                <i v-if="project.role_type.includes('Data')" class="flask icon"></i>
                <i v-if="project.role_type.includes('Web')" class="cloud icon"></i>
              </td>
              <td>
                {{project.project_type ? project.project_type : "Unspecified"}}
              </td>
            </tr>
          </tbody>

        </table>




  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "BusinessProfile",
  computed: {
    ...mapGetters(
      [
        'isLoggedIn',
        'getCurrentUserProfile',
        'isAdmin',
        'isStudent',
        'isBusiness',
        'isLoggedIn',
        'getOpenProjectsByBusinessId',
        'getInProgressProjectsByBusinessId'
      ]
  ),
  profile() {
    return this.$store.state.users.current_user_profile;
   }
  },
  created (){
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions(['getUserById']),

    fetchData: function (){
      this.getUserById(this.$route.params.id)
        .then(res => {
          // console.log('res', res)
          // console.log('this.$store.state.users.current_user_profile', this.$store.state.users.current_user_profile)
        })
        // console.log('this.User', this.User)
        // console.log('getUserby id', this.getUserById(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
sui-container{
  margin-top: 100px !important;
  margin-left: 20% !important;
}
h1 {
  color: white;
  letter-spacing: .2rem;
  font-weight: 200;
}

h3{
  color: orange;
  margin-bottom: 5px;
}

h4{
  margin-top: 0;
  color: white;
}

.container {
  margin-top: 110px !important;
  margin-left: 15%;
  margin-right: 15%;
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
	background-image: url("../img/papaver-rhoeas-63741-unsplash.jpg");
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

.new_project_button {
  background-color: gray;
  border-radius: 50px;
  color: white;
}

.narrow {
  width: 30% !important;
}

.wide {
  width: 60% !important;
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
</style>
