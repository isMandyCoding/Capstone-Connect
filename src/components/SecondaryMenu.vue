<template>
  <div >
    <div class="spacer">

    </div>
    <sui-menu secondary>
       <sui-menu-menu>
          <sui-menu-item
            class="highlight"
            :active="isActive('Any')"
            @click="clickedRole('Any')"
          ><i class="clipboard list icon"></i>All
          </sui-menu-item>
          <sui-menu-item
          class="highlight"
            :active="isActive('Full Stack Web Developer')"
            @click="clickedRole('Full Stack Web Developer')"
          ><i class="globe icon"></i>Full Stack Web Developer
          </sui-menu-item>
          <sui-menu-item
            class="highlight"
            :active="isActive('Data Scientist')"
            @click="clickedRole('Data Scientist')"
          ><i class="flask icon"></i>Data Scientist
          </sui-menu-item>
      </sui-menu-menu>
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-button
            class="highlight"
            @click.native="onClickList"
          ><i class="bars icon"></i>List View</sui-button>
        </sui-menu-item>
        <sui-menu-item>
          <sui-button
            class="highlight"
            @click.native="onClickCard"
          ><i class="th icon"></i>Card View</sui-button>
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

    <div class="spacer">

    </div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SecondaryMenu',
    computed: {
      ...mapGetters(['isLoggedIn'])
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
  .highlight{
    color: white !important;
    background-color: black;
  }
  .spacer {
    margin-top: 20px;
  }

</style>
