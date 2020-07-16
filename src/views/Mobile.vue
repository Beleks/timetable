<template>
  <div>Mobile is here</div>
</template>
<script>
export default {
  methods: {
    Resize() {
      window.onresize = ev => {
        if (ev.target.innerWidth <= 800) {
          this.$router.push("/");
        }
      };
    }
  },
  mounted() {
    this.Resize();
  }
};
</script>

<style scope>
.header {
  width: 100%;
  margin: 0px;
  padding: 5px 5px;
  text-align: center;
  background-color: rgb(140, 200, 204);
  border-bottom: 2px solid #444;
}
</style>