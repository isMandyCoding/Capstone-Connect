<template>
  <div>
  <div class="wrapper">
  </div>
  <div class="menu-wrapper">

  </div>
  <div class="container">
    <div v-if="isLoggedIn">
      <h1>PERMISSIONS</h1>


        <PermissionsMenu></PermissionsMenu>

        <table v-if="isLoggedIn" class="ui celled table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
          </tr></thead>

          <tbody>
            <tr v-for="user in allUsers" :key="user.user_id">

              <td>{{user.company}}</td>
              <td
                  <router-link :to="`/users/${user.user_id}`">
                    <span class="user_name">{{user.name}}</span>
                  </router-link>
              </td>
              <td>
                {{user.email}}
              </td>
              <td>
                {{user.phone}}
              </td>
              <td>{{user.role }}</td>
              <td>
                <sui-button tiny basic color="orange" icon="trash alternate" />
              </td>
            </tr>
          </tbody>

        </table>

    </div>
    <h2 v-else>Log in to get started.</h2>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PermissionsMenu from './PermissionsMenu';



export default {
  name: "Users",
  computed: {
    ...mapGetters(['allUsers', 'allBusinesses', 'allStudents', 'accessRequests', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchAllusers'])
  },
  created() {
    this.fetchAllusers();
  },
  components: {
    PermissionsMenu
  }

};
</script>

<style scoped>
h1 {
  font-family: "museo-sans", sans-serif;
  color: white;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
table {
  max-width: 100%;
}

.container {
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

.wrapper {
	height: 95px;
	width: 100%;
	background-image: url("../img/olia-gozha-34223-unsplash.jpg");
  background-size: 100%;
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
