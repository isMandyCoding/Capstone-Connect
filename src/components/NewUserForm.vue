<template>
  <div>
    <div class="wrapper">
    </div>
    <div class="container">


      <h1 v-if="isAdmin">CREATE A USER</h1>
      <h1 v-else>REGISTER</h1>

      <sui-form @submit.prevent="handleSubmit">


        <sui-form-field>
          <h3>Full Name</h3>
          <input
             type="text"
             v-model="newUser.name">
        </sui-form-field>

        <sui-form-field>
          <h3>Email</h3>
          <input
             type="text"
             v-model="newUser.email">
        </sui-form-field>

        <sui-form-field>
          <h3>Phone</h3>
          <input
             type="text"
             v-model="newUser.phone">
        </sui-form-field>

        <sui-form-field>
          <h3>Role</h3>
          <sui-dropdown
            :options="roles"
            placeholder="Please choose one"
            selection
            v-model="newUser.role"
          />
        </sui-form-field>

        <sui-form-field>
          <h3>Company</h3>
          <p>If you are representing a business, what company do you work for?</p>
          <input
             type="text"
             v-model="newUser.company">
        </sui-form-field>

        <sui-form-field>
          <h3>Website (optional)</h3>
          <input
             type="text"
             v-model="newUser.website">
        </sui-form-field>

        <sui-button type="submit" color="orange">Submit</sui-button>

        <div class="spacer">

        </div>
      </sui-form>



  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "NewUserForm",
  computed: {...mapGetters([
    'isLoggedIn',
    'getCurrentUserProfile',
    'isAdmin',
    'isStudent',
    'isBusiness',
    'getBusinesses'
  ]) },
  methods: {
    ...mapActions(['addNewUser']),
    handleSubmit: function(){
      this.addNewUser(this.newUser);
      console.log('this.$store.state.users', this.$store.state.users)
    }
  },
  data() {
    return {
      newUser:
      {
               "name": null,
               "email": null,
               "company": null,
               "website": null,
               "phone": null,
               "role": null,
      },
      roles: [
        { key : "student", text: "Student", value: "student"},
        { key: "business", text: 'Business', value: "business"}
      ]
    };
  }
};
</script>

<style scoped>

h1 {
  font-family: "museo-sans", sans-serif;
  color: white;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 20px;
  margin-bottom: 10px;
}

h3 {
  margin-top: 30px;
  color: orange;
}

h4 {
  margin-top: 0;
  color: gray;
}

.tall {
  height: 200px;
}

.medium {
  height: 150px;
}

.container{
  margin-top: 60px;
  margin-left: 20%;
  margin-right: 20%;
}

.spacer {
  height: 20px;
}

.wrapper {
	height: 110px;
	width: 100%;
	background-image: url('../img/gerome-bruneau-65759-unsplash.jpg');
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
