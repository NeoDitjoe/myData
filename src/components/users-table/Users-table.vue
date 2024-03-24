<script>

export default {
  data() {
    return {
      userData: [],
      designation: [],
      filteredUserData: [],
      currentPage: Number(this.$router.currentRoute.value.query.page),
      highlightSearchResults: null
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
        const searchQuery = this.$route.query.search;
        if (designationQuery) {
          this.filterByDesignation(designationQuery);
        } else if (searchQuery) {
          this.searchHandler(searchQuery)
        } else {
          this.filteredUserData = this.userData.slice();
        }
      });
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

    searchHandler(searchInput) {
      let searchResults = []

      this.userData.map((user) => {

          if (user.designation === searchInput
            || user.name === searchInput
            || user.surname === searchInput
            || user.department === searchInput
          ) {
            searchResults.push(user)
          }
      });

      this.highlightSearchResults = searchInput
      this.filteredUserData = searchResults
    },

    searchQuery() {
      this.$router.push({ query: { page: 0, search: this.$refs.searchValue.value.toUpperCase() } });

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
      if (Number(this.$route.query.page) < Math.floor(this.filteredUserData.length / 10)) {
        this.$router.push({
          query: {
            ...this.$route.query,
            page: Number(this.$route.query.page) + 1
          }
        })

        setTimeout(() => {
          window.location.reload()
        }, 100);
      }
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

  <div class="filtering">
    <form @change="designationQuery" action="#">
      <select ref="designation" class="select">
        <option>FILTER BY DESIGNATION</option>
        <option v-for="option in designation" :key="option">{{ option }}</option>
      </select>
    </form>

    <form @submit="e => {
      e.preventDefault()
      searchQuery()
    }" class="search">
      <input required type="text" name="search" ref="searchValue" placeholder="Search..." />
      <button class="button">Search</button>
    </form>
  </div>

  <button class="button" @click="clearDesignationQuery">Clear filter</button>

  <p v-if="highlightSearchResults">Results for:{{ highlightSearchResults }}</p>

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
        <td v-bind:class="{ td: true, tdHighlight: highlightSearchResults === user.name}">{{ user.name }}</td>
        <td v-bind:class="{ td: true, tdHighlight: highlightSearchResults === user.surname }">{{ user.surname }}</td>
        <td v-bind:class="{ td: true, tdHighlight: highlightSearchResults === user.designation }">{{ user.designation }}</td>
        <td v-bind:class="{ td: true, tdHighlight: highlightSearchResults === user.department}">{{ user.department }}</td>
      </tr>
    </tbody>
  </table>

  <button class="button" :disabled="currentPage < 1" @click="prevPage">Prev</button>
  <button class="button" :disabled="Number(currentPage) >= Math.floor(filteredUserData.length / 10)"
    @click="nextPage">Nex</button>

</template>

<style>
@import './user-table.css';
</style>
