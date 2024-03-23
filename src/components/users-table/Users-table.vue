<script>
import { ref } from 'vue';


function handleClick() {
  console.log(selectedDesignation);
}

const selectedDesignation = ref('')

export default {
  data() {
    return {
      userData: [],
      designation: []
    }
  },

  mounted() {
    fetch('../../../util/users.json')
      .then(res => res.json())
      .then(data => {
        this.userData = data

        const designation = data.map((item) => {
          const designation = item.designation
          return designation
        })
        this.designation = new Set(designation)
      });
  }
}


</script>

<template>

  <h1 class="green">Users Table</h1>

  <select>
    <option>ALL DESIGNATION</option>
    <option v-for="option in designation" :key = designation>{{ option }}</option>
  </select>

  <table style="border: 1px solid black;">
    <tr>
      <th class="th">No.</th>
      <th class="th">Name</th>
      <th class="th">Surname</th>
      <th class="th">Designation</th>
      <th class="th">Department</th>
    </tr>

    <tbody>
      <tr v-for="(user, index) in userData" :key = "user.name">
        <td class="index">{{ index + 1 }}</td>
        <td class="td">{{user.name }}</td>
        <td class="td">{{ user.surname }}</td>
        <td class="td">{{ user.designation }}</td>
        <td class="td">{{ user.department }}</td>
      </tr>
    </tbody>

  </table>
</template>

<style>
@import './user-table.css';
</style>
