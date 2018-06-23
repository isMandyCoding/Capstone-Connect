<template>
  <table v-if="isLoggedIn" class="ui celled table">
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Delete</th>
    </tr></thead>

    <tbody>
      <tr v-for="bookmark in bookmarks" :key="bookmark.bookmark_id">

        <td
            <router-link :to="`/projects/${bookmark.project_id}`">
              <span class="bookmark_name">{{bookmark.bookmark_name}}</span>
            </router-link>
        </td>
        <td>
          <sui-button tiny basic color="orange" icon="trash alternate" />
        </td>
      </tr>
    </tbody>

  </table>
<template>


<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Bookmarks",
  computed: {
    ...mapGetters(['AllProjects', 'isLoggedIn'])
    bookmarks() {
      return this.$store.state.projects.current_project
    }
  },
  methods: {
    ...mapActions(['fetchBookmarks'])
  },
  created() {
    this.fetchBookmarks();
  }
 }



}

</script>
