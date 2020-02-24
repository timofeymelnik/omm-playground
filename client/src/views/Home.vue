<template>
  <div class="home">
    <AddMonument :create-monument="createMonument" />
    <MonumentsList :monuments="monuments" :deleteMonument="deleteMonument" />
  </div>
</template>

<script>
import AddMonument from "@/components/AddMonument.vue";
import MonumentsList from "@/components/MonumentsList.vue";
import MonumentService from "@/services/MonumentService";

export default {
  name: "Home",
  components: {
    AddMonument,
    MonumentsList
  },
  data: () => ({
    monuments: []
  }),
  methods: {
    async fetchMonuments() {
      const response = await MonumentService.fetchMonuments();
      this.monuments = response;
    },
    async deleteMonument(id) {
      await MonumentService.deleteMonument(id);
      this.monuments = this.monuments.filter(({ _id }) => _id !== id);
    },
    async createMonument(params) {
      const response = await MonumentService.createMonument(params);
      this.monuments.push(response);
    }
  },
  mounted() {
    this.fetchMonuments();
  }
};
</script>
