<template>
  <div>
    <h4>Items:</h4>
    <table id="list">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Address</th>
        <th>Date</th>
        <th>Monument View</th>
        <th>Registry Number</th>
      </tr>
      <tr v-for="(item, index) in monuments" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.monumentView }}</td>
        <td>{{ item.registryNumber }}</td>
        <td>
          <button type="button" @click="removeMonument(item._id)">X</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MonumentsList",
  props: {
    monuments: Array,
    deleteMonument: Function
  },
  methods: {
    removeMonument: function(id) {
      this.deleteMonument(id);
    }
  }
};
</script>

<style scoped></style>
