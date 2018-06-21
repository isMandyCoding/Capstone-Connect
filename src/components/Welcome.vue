<template>
  <div id="landing-image" class="masthead">
  <h1>WELCOME TO CAPSTONE CONNECT</h1>
  <h3>Connecting students and businesses with real-world projects</h3>

  <sui-grid celled="internally">
    <sui-grid-row stretched>

      <sui-grid-column :width="6">
          <sui-segment piled>
            <h3>Log In</h3>
            <sui-form>
              <sui-form-field>
                <label>E-Mail</label>
                <input >
              </sui-form-field>
              <sui-form-field>
                <label>Password</label>
                <input >
              </sui-form-field>
              <sui-button class="highlight" type="submit">Log In</sui-button>
            </sui-form>
          </sui-segment>
      </sui-grid-column>
      <sui-grid-column :width="5">
        <sui-segment piled>
          <h3 class="inside_card">Are you a business?</h3>
          <sui-form>
            <sui-form-field>
              <label>Name</label>
              <input >
            </sui-form-field>
            <sui-form-field>
              <label>E-Mail</label>
              <input >
            </sui-form-field>
            <sui-form-field>
              <label>Company</label>
              <input >
            </sui-form-field>
            <sui-button class="highlight" type="submit">Request Access</sui-button>
          </sui-form>
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column :width="5">
        <sui-segment piled>
          <h3 class="inside_card">Are you a student?</h3>
          <sui-form>
            <sui-form-field>
              <label>Name</label>
              <input >
            </sui-form-field>
            <sui-form-field>
              <label>E-Mail</label>
              <input >
            </sui-form-field>
            <sui-form-field>
                  <sui-checkbox
                    label="Full Stack Web Developer"
                    radio
                    value="1"
                    v-model="value"
                  />
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox
                    label="Data Scientist"
                    radio
                    value="2"
                    v-model="value"
                  />
            </sui-form-field>
            <sui-button class="highlight" type="submit">Request Access</sui-button>
          </sui-form>
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Welcome",
  data() {
    return {
      value: '1',
    };
  },
}
</script>

<style scoped>
h1, h2, h3 {
  text-align: center;
}
h1 {
  font-family: "museo-sans", sans-serif;
  color: orange;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}
h3 {
  margin-top: 0;
  margin-bottom: 20px;
}
.highlight{
  background-color:orange;
  color: white;
  width:100%;

}
/* .landing-image {
   background-image: url('/img/annie-spratt-608002-unsplash.jpg') !important; */
  /* background-size: cover !important;

} */
</style>
