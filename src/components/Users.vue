<template>
<table v-if="isLoggedIn" class="ui celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Company</th>
      <th>Role</th>
      <th>Committed Student</th>
  </tr></thead>

  <tbody>
    <tr v-for="user in AllUsers" :key="user.user_id">

      <td>{{user.name}}</td>
      <td>{{user.company}}</td>
      <td
        @click="updateCurrentUser(user)"
      >
        <span class="user_name">{{user.name}}</span>
      </td>
      <td>
        {{user.role}}
      </td>
      <td></td>
      <td>
        <sui-button tiny basic color="orange" icon="trash alternate" />
      </td>
    </tr>
  </tbody>

</table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Users",
  computed: {
    ...mapGetters(['AllUsers', 'isLoggedIn'])
    // isDataScience: function(role_type){
    //   console.log('role',role_type)
    //   return role_type.indexOf("Data") !== -1;
    // },
    // isWebDev: function(role){
    //   return role_type.indexOf("Web") !== -1;
    // }
  },
  methods: {
    updateCurrentuser: function(user){
      this.$store.commit('setCurrentUser', user)
      this.$router.push({ path: "/student/users/user"})
    }
  }

}

</script>

<style scoped>
.user_name {
  color: orange;
  text-decoration: underline;
}

</style>
