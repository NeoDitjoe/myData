<script>

export default {
  data() {
    return {
      userData: [],
      designation: [],
      filteredUserData: [],
      currentPage: Number(this.$router.currentRoute.value.query.page)
    };
  },

  mounted() {
    fetch('../../../util/users.json')
      .then(res => res.json())
      .then(data => {
        this.userData = data;

        const designation = data.map(item => item.designation);
        this.designation = new Set(designation);

        const designationQuery = this.$route.query.designation;
        if (designationQuery) {
          this.filterByDesignation(designationQuery);
        } else {
          this.filteredUserData = this.userData.slice();
        }
      });
  },

  watch: {
    '$route.query.designation': {
      handler(newDesignation) {
        if (newDesignation) {
          this.filterByDesignation(newDesignation);
        } else {
          this.filteredUserData = this.userData.slice();
        }
      },
      immediate: true,
    },

  },

  methods: {
    filterByDesignation(designation) {
      this.filteredUserData = this.userData.filter(user => user.designation === designation);
    },

    designationQuery() {
      this.$router.push({ query: { page: 0, designation: this.$refs.designation.value } });
      setTimeout(() => {
        window.location.reload()
      }, 100);
    },

    clearDesignationQuery() {
      this.$router.push({ path: '/users-table', query: { page: 0 } });

      setTimeout(() => {
        window.location.reload()
      }, 100);
    },

    nextPage() {
      this.$router.push({
        path: this.$router.currentRoute.value.fullPath,
        query: {
          ...this.$route.query,
          page: Number(this.$route.query.page) + 1
        }
      })
      setTimeout(() => {
        window.location.reload()
      }, 100);
    },

    prevPage() {
      if (Number(this.$route.query.page) > 0) {
        this.$router.push({ query: { ...this.$route.query, page: Number(this.$route.query.page) - 1 } })

        setTimeout(() => {
          window.location.reload()
        }, 100);
      }
    },
  },
};

</script>

<template>
  <h1 class="green">Users Table</h1>

  <form @change="designationQuery" action="#">
    <select ref="designation">
      <option>ALL DESIGNATION</option>
      <option v-for="option in designation" :key="option">{{ option }}</option>
    </select>
  </form>

  <button @click="clearDesignationQuery">Clear filter</button>

  <table style="border: 1px solid black;">
    <tr>
      <th class="th">No.</th>
      <th class="th">Name</th>
      <th class="th">Surname</th>
      <th class="th">Designation</th>
      <th class="th">Department</th>
    </tr>

    <tbody>
      <tr v-for="(user, index) in filteredUserData.slice(currentPage * 10, (currentPage * 10) + 10)" :key="user.name">
        <td class="index">{{ index + 1 + (currentPage * 10) }}</td>
        <td class="td">{{ user.name }}</td>
        <td class="td">{{ user.surname }}</td>
        <td class="td">{{ user.designation }}</td>
        <td class="td">{{ user.department }}</td>
      </tr>
    </tbody>
  </table>

  <button @click="prevPage">Prev</button>
  <button @click="nextPage">Nex</button>

</template>

<style>
@import './user-table.css';
</style>
