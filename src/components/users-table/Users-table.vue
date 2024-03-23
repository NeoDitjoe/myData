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
      <th>Name</th>
      <th>Surname</th>
      <th>Designation</th>
      <th>Department</th>
    </tr>

    <tbody>
      <tr v-for="(user, index) in userData" :key = "user.name">
        <td style="border: 1px solid black;">{{(index + 1) + ' - '+ user.name }}</td>
        <td style="border: 1px solid black;">{{ user.surname }}</td>
        <td style="border: 1px solid black;">{{ user.designation }}</td>
        <td style="border: 1px solid black;">{{ user.department }}</td>
      </tr>
    </tbody>

  </table>
</template>
