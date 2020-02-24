<template>
  <div>
    <h2>Add new Monument</h2>
    <form @submit="postForm" novalidate="true">
      <label>
        Name
        <input type="text" v-model="form.name" />
      </label>
      <label>
        Description
        <input type="text" v-model="form.description" />
      </label>
      <label>
        Address
        <input type="text" v-model="form.address" />
      </label>
      <label>
        Date
        <input type="date" v-model="form.date" />
      </label>
      <label>
        Monument View
        <input type="text" v-model="form.monumentView" />
      </label>
      <label>
        Registry Number
        <input type="text" v-model="form.registryNumber" />
      </label>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
function getDefaultState() {
  return {
    name: null,
    description: null,
    address: null,
    date: null,
    monumentView: null,
    registryNumber: null
  };
}
export default {
  name: "AddMonument",
  props: {
    createMonument: Function
  },
  data: () => ({
    form: getDefaultState()
  }),
  methods: {
    postForm: function(e) {
      e.preventDefault();
      this.createMonument(this.form);
      this.form = getDefaultState();
    }
  }
};
</script>

<style scoped>
form {
  text-align: left;
}
label {
  display: block;
}
</style>
