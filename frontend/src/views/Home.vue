<template>
  <div class="container-fluid">

    <div class="text-center">
      <h1>Nest Users List App</h1>
      <p> Built with Nest.js, Vue.js and MongoDB</p>

      <div v-if="users.length === 0">
        <h2> No user found at the moment </h2>
      </div>
    </div>
     
      <div class="">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.first_name }}</td>
              <td>{{ user.last_name }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/users/list`)
        .then(data => (this.users = data.data));
    }
  }
};
</script>

