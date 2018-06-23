<template>
  <sui-menu>
    <sui-menu-item>
     <router-link to="/home">
      <svg width="150" height="30" >

        <image xlink:href="../img/galvanize-logo.svg" width="100%" height="100%" ></image>
      </svg>
     </router-link>
    </sui-menu-item>
    <p>CAPSTONE CONNECT</p>

    <sui-menu-menu pointing position="right" v-if="isLoggedIn">
        <router-link
          v-if="isStudent"
          class="item"
          to="/student/projects"
          :active="isActive(this)"
          @click="select(this)">
          <i class="clipboard list icon"></i>
          Projects
        </router-link>
        <router-link
          v-if="isAdmin"
          class="item"
          to="/admin/projects"
          :active="isActive(this)"
          @click="select(this)">
          <i class="clipboard list icon"></i>
          Projects
        </router-link>
        <router-link
          v-if="isAdmin"
          to="/users"
          class="item"
          :active="isActive(this)"
          @click="select(this)">
          <i class="id card outline icon"></i>
          Permissions
        </router-link>
        <router-link
          v-if="isStudent || isBusiness"
          class="item"
          to="/student/info_requests"
          :active="isActive(this)"
          @click="select(this)">
          <i class="question circle outline icon"></i>
          Info Requests
        </router-link>
        <router-link
          class="item"
          :to="`/messages/${getId}`"
          :active="isActive(this)"
          @click="select(this)"
          ><i class="envelope outline icon"></i>
        </router-link>
        <router-link
          v-if="isLoggedIn"
          class="item"
          :to="`/bookmarks/${getId}`"
          :active="isActive(this)"
          @click="select(this)"
          ><i class="bookmark outline icon"></i>
        </router-link>

        <a class="item" @click="logout">Log Out</a>
        <sui-menu-item basic content="Person" icon="user circle"></sui-menu-item>
    </sui-menu-menu>

    <sui-menu-menu  v-else position="right">

      <a href="/home" class="ui item" @click="login">
        Login
      </a>
    </sui-menu-menu>


  </sui-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn', 'isStudent', 'isAdmin', 'isBusiness', 'getId'])
  },
  methods: {
    ...mapActions(['login', 'logout']),
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    }
  }
};
</script>

<style scoped>

p {
  font-family: "museo-sans", sans-serif;
  color: #403E3E;
  letter-spacing: .4rem;
  font-weight: 100;
  margin-top: 20px;
  margin-left: 2.5%;
  padding-bottom: 5px;

}

</style>
