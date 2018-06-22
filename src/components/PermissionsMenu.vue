<template>
  <div >
    <sui-menu pointing secondary>
          <sui-menu-item>

            <router-link v-if="isAdmin" to="/admin/new_user" tag="sui-button">
                  <sui-icon name="plus"></sui-icon> Create User
            </router-link>

          </sui-menu-item>
          <sui-menu-item
            :active="isActive('Full Stack Web Developer')"
            @click="clickedRole('Full Stack Web Developer')"
          ><i class="briefcase icon"></i>Businesses
          </sui-menu-item>
          <sui-menu-item
            :active="isActive('Data Scientist')"
            @click="clickedRole('Data Scientist')"
          ><i class="book icon"></i>Students
          </sui-menu-item>
          <sui-menu-item
            :active="isActive('Access')"
            @click="clickedRole('Access')"
          ><i class="id card icon"></i>Access Requests
          </sui-menu-item>

    </sui-menu>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'PermissionsMenu',
    computed: {
      ...mapGetters(['isAdmin', 'isLoggedIn'])
    },
    data(){
      return {
        active: 'All',
        items: ['All', 'Full Stack Web Developer','Data Scientist']
      }
    },
    methods: {
      isActive(name) {
        return this.active === name;
      },
      clickedRole(name) {
        this.active = name;
        this.$emit('clickedRole', this.active)
      },
      onClickList(){
        this.$emit('clickedListView');
      },
      onClickCard(){
        this.$emit('clickedCardView');
      }
    }
};

</script>

<style scoped>
  sui-menu {
    width: 100%;
    padding-right: 0;
    color: white;
  }

</style>
