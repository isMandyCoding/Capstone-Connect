<template>
  <div>
        <div class="wrapper">
        </div>
        <div class="menu-wrapper">

        </div>
        <div class="container">
        <div v-if="isLoggedIn">


       <div class="container">
        <div v-if="isLoggedIn">

          <h1>MESSAGES</h1>

          <div class="spacer">

          </div>
          <sui-button class="new_message_button" ><i class="plus icon"></i>Compose</sui-button>


          <h2>Inbox</h2>
          <table  class="ui celled table">

            <thead>
              <tr>
                <th>From</th>
                <th>Company</th>
                <th>Message</th>
                <th>Sent</th>
              </tr>
            </thead>

            <tbody v-if="getReceived.length > 0">
              <tr v-for="message in getReceived" :key="message.message_id">
                <td>{{message.contact_name}}</td>
                <td>{{message.contact_company}}</td>
                <td>{{message.message}}</td>
                <td>{{message.timestamp}}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td></td>
                <td>You have no messages.</td>
                <td></td>
              </tr>
            </tbody>
        </table>

        <h2>Sent</h2>
        <table class="ui celled table">
            <thead>
              <tr>
                <th>Sent To</th>
                <th>Company</th>
                <th>Message</th>
                <th>Sent</th>
              </tr>
            </thead>
            <tbody v-if="getSent.length > 0">
              <tr v-for="message in getSent" :key="message.message_id">
                <td>{{message.contact_name}}</td>
                <td>{{message.contact_company}}</td>
                <td>{{message.message}}</td>
                <td>{{message.timestamp}}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td></td>
                <td>You have no messages.</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

        </table>
    </div>
  </div>
</div>
<div v-else>
  <h2 >Log in to get started.</h2>
</div>
</div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Messages",
  computed: {
    ...mapGetters(['isLoggedIn', 'getSent', 'getReceived']),
  },
  methods: mapActions(['fetchSentMessages', 'fetchReceivedMessages']),
  created() {
    this.fetchSentMessages();
    this.fetchReceivedMessages();
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
  margin-left: 5%;
  margin-right: 5%;
}

.wrapper {
	height: 95px;
	width: 100%;
	background-image: url("../img/annie-spratt-608002-unsplash.jpg");
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

.new_message_button {
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
