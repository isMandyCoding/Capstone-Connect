<template>
  <div>
  <div>
        <div class="wrapper">
        </div>


       <div class="container">
        <div v-if="isLoggedIn">

          <h1>Bookmarks</h1>

          <div class="spacer">

          </div>

          <table  class="ui celled table">

            <thead>
              <tr>
                <th>Project ID</th>
              </tr>
            </thead>

            <tbody v-if="getBookmarks">
              <tr v-for="bookmark in getBookmarks" :key="bookmark.bookmark_id">
                <td>{{bookmark.project_id}}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td></td>
                <td>You have no Bookmarks.</td>
                <td></td>
              </tr>
            </tbody>
        </table>


    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Bookmarks",
  computed: {
    ...mapGetters(['isLoggedIn', 'getBookmarks']),
  },
  methods: mapActions(['fetchBookmarks']),
  created() {
    this.fetchBookmarks();
  }
}

</script>

<style scoped>
h1 {
  font-family: "museo-sans", sans-serif;
  color: white;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}
sui-menu {
  width: 100%;
  padding-right: 0;
  color: white;
  z-index: 1;
}

.container {
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
}

.wrapper {
	height: 95px;
	width: 100%;
	background-image: url("../img/david-travis-537193-unsplash.jpg");
  background-size: 100%;
	position: absolute;
	left: 0;
	top: 60px;
	display: block;
	align-items: left;
  padding-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
  z-index: -1;
}

.spacer {
  height: 12px;
}

.new_Bookmark_button {
  background-color: gray;
  border-radius: 50px;
  color: white;
}

.menu-wrapper {
  height: 68px;
  width: 100%;
  background-color: #3D3D3D;
  position: absolute;
  left: 0;
  top: 155px;
  display: block;
  align-items: left;
  padding-top: 5px;
  z-index: -1;
  padding-left: 13%;
}

</style>
