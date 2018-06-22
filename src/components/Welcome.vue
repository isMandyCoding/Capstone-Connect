<template>
  <div>
    <div class="wrapper">

    </div>

    <div class="menu-wrapper">
      <h1>WELCOME TO CAPSTONE CONNECT</h1>
      <h3>Connecting students and businesses with real-world projects</h3>
    </div>

    <div class="container">


                  <sui-segment piled>
                    <h2>Log In</h2>
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
                      <sui-button basic class="highlight" >Register</sui-button>
                    </sui-form>
                  </sui-segment>

      </div>
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
  letter-spacing: .1rem;
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
}

.container {
  margin-top: 130px !important;
  margin-left: 35%;
  margin-right: 35%;
}
.highlight{
  background-color:orange;
  color: white;
  width:100%;
  margin-top: 10px;
}
.wrapper {
	height: 100%;
	width: 100vw;
	background-image: url("../img/annie-spratt-608002-unsplash.jpg");
  background-size: 100%;
	position: absolute;
	left: 0;
	top: 130px;
	display: block;
	align-items: left;
  padding-top: 0;
  padding-left: 20%;
  padding-right: 20%;
}
.menu-wrapper {
  height: 120px;
	width: 100%;
	background-color: #3D3D3D;
	position: absolute;
	left: 0;
	top: 60px;
	display: block;
	align-items: left;
  padding-top: 0;
  padding-left: 20%;
  padding-right: 20%;
  z-index: 0;
}
</style>
