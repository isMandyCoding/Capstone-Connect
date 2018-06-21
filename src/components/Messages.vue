<template>
  <div>
  <div sui-container v-if="isLoggedIn">

      <h1>MESSAGES</h1>
      <sui-button color="orange"><i class="edit icon"></i>Compose</sui-button>
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
<div v-else>
  <h2 >Log in to get started.</h2>
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
  color: orange;
  letter-spacing: .4rem;
  font-weight: 200;
  margin-top: 30px;
}
</style>
