<template>
  <div class="menu-wrapper">


    <sui-menu secondary>
      <sui-menu-item>

        <router-link v-if="isAdmin" to="/admin/new_user" tag="sui-button">
          <sui-button round class="new_user_button">
              <sui-icon name="plus"></sui-icon> Create User
           </sui-button>
        </router-link>

        <router-link v-if="isBusiness" to="/business/new_user" tag="sui-button">
          <sui-button round class="new_user_button">
              <sui-icon name="plus"></sui-icon> Create User
           </sui-button>
        </router-link>

      </sui-menu-item>
      <sui-menu-item class="white-font"

        :active="isActive('Full Stack Web Developer')"
        @click="clickedRole('Full Stack Web Developer')"
      ><i class="briefcase icon"></i>Businesses
      </sui-menu-item>
      <sui-menu-item
        class="white-font"
        :active="isActive('Data Scientist')"
        @click="clickedRole('Data Scientist')"
      ><i class="book icon"></i>Students
      </sui-menu-item>
      <sui-menu-item
        class="white-font"
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
    z-index: 1;
  }
  .new_user_button {
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
    z-index: 2;
    padding-left: 13%;
  }

  .white-font {
    color: lightgray !important;
  }
</style>
