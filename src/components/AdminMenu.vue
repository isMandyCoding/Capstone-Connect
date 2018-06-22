<template>
  <div>

      <sui-menu material class="offwhite">

        <sui-menu-item >
          <sui-dropdown
            multiple
            :options="project_types"
            placeholder="Project Type"
            search
            selection
            v-model="current.project_types"
          />
        </sui-menu-item>

        <sui-menu-item>
            <sui-dropdown
              multiple
              :options="roles"
              placeholder="Role"
              selection
              v-model="current.roles"
            />

        </sui-menu-item>
        <sui-menu-item>
            <sui-dropdown
              multiple
              :options="statuses"
              placeholder="Status"
              selection
              v-model="current.statuses"
            />

        </sui-menu-item>

      </sui-menu>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AdminMenu',
    computed: {
      ...mapGetters(['isLoggedIn', 'isAdmin', 'isBusiness'])
    },
    data(){
      return {
        active: 'All',
        current: {
          roles: [],
          statuses: [],
          project_types: []
        },
        project_types: [
          { key : "capstone", text: "Capstone", value: "capstone"},
          { key: "consulting", text: 'Consulting', value: "consulting"},
          { key: "internship", text: 'Internship', value: "internship"},
          { key: "postgrad", text: 'Post-Graduation Project', value: "postgrad"}
        ],
        roles: [
          { key : 'All', text: "All", value: "All"},
          { key: "webdev", text: 'Full Stack Web Developer', value: "webdev"},
          { key: "datascience", text: 'Data Scientist', value: "datascience"}
        ],
        statuses: [
          { key : 'open', text: "Does not have committed student", value: "open"},
          { key: 'committed', text: 'Has committed student', value: "in_progress"}
        ]
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
sui-button {
  color: orange !important;
  padding: 10px !important;
  border-radius: 5px !important;
  border: 1px solid orange !important;
}


sui-button:hover {
    color: white !important;
    background-color: orange !important;
  }

.offwhite {
  background-color: #EAEAEA;
}

</style>
