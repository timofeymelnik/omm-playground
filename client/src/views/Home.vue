<template>
  <div class="home">
    <PlaceholderComponent msg="Here will be omm app" />
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceholderComponent from "@/components/PlaceholderComponent.vue";

export default {
  name: "Home",
  components: {
    PlaceholderComponent
  }
};
</script>
