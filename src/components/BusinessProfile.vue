<template>
  <div is="sui-container">



    <h1>
      <i v-if="getCurrentProfile.role_type && getCurrentProfile.role_type.includes('Data')" class="flask icon"></i>
      <i v-if="getCurrentProfile.role_type && getCurrentProfile.role_type.includes('Web')" class="cloud icon"></i>
      {{getCurrentProfile.profile_name}}
    </h1>

    <sui-menu  secondary>
      <sui-menu-item>
        <router-link v-if="isStudent" to="/student/profiles"><h4><i class="angle double left icon"></i>Back</h4></router-link>
        <router-link v-if="isAdmin" to="/admin/profiles"><h4><i class="angle double left icon"></i>Back</h4></router-link>
      </sui-menu-item>
      <sui-button v-if="isStudent" class="highlight" basic name="Message"><i class="envelope outline icon"></i> Message</sui-button>

    </sui-menu>


    <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <h3>Contact</h3>
        <p>{{getCurrentProfile.name}}</p>


        <h3>Contact</h3>
        <p>{{getCurrentProfile.company}}</p>
        <p v-if="getCurrentProfile.website"><i class="linkify icon"></i>{{getCurrentProfile.website}}</p>
        <p v-if="getCurrentProfile.email"><i class="envelope icon"></i>{{getCurrentProfile.email}}</p>
        <p v-if="getCurrentProfile.phone"><i class="phone icon"></i>{{getCurrentProfile.phone}}</p>

        <h3 v-if="getCurrentProfile.timestamp">Created</h3>
        <p v-if="getCurrentProfile.timestamp"><i class="calendar alternate outline icon"></i>{{getCurrentProfile.timestamp}}</p>

        </sui-grid-column>
      <sui-grid-column>

        <sui-table celled striped>
          <sui-table-header>
            <sui-table-row>
              <sui-table-headerCell colspan="3">Projects</sui-table-headerCell>
            </sui-table-row>
          </sui-table-header>

          <sui-table-body>
            <sui-table-row>
              <sui-table-cell collapsing>
                Project Title
              </sui-table-cell>
              <sui-table-cell>Committed Student</sui-table-cell>
            </sui-table-row>
            
          </sui-table-body>
        </sui-table>
      </sui-grid-column>
    </sui-grid-row>

    </sui-grid>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "profile",
  computed: {...mapGetters(['isLoggedIn', 'getCurrentProfile', 'isAdmin', 'isStudent']) }
};

</script>

<style scoped>
sui-container{
  margin-top: 100px !important;
  margin-left: 20% !important;
}
h1{
  color: orange;
}

h3{
  color: orange;
  margin-bottom: 5px;
}

h4{
  margin-top: 0;
  color: gray;
}

.highlight-background {
  color: white !important;
  background-color: orange !important;
}
</style>
