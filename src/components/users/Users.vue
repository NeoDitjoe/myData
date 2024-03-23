<script setup>
let userData = [];

fetch('../../../util/users.json')
  .then(res => res.json())
  .then(data => userData = data );

function handleClick() {
  console.log('clicked');
}
</script>

<template>
  <button @click="handleClick">click me</button>

  <table style="border: 1px solid black;">
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Designation</th>
      <th>Department</th>
    </tr>

    <tbody> 
      <tr v-for="user in userData" :key="user.name">
        <td style="border: 1px solid black;">{{ user.name }}</td>
        <td style="border: 1px solid black;">{{ user.surname }}</td>
        <td style="border: 1px solid black;">{{ user.designation }}</td>
        <td style="border: 1px solid black;">{{ user.department }}</td>
      </tr>
    </tbody>

  </table>
</template>
