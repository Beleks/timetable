<template>
  <div>
    <navbar-day></navbar-day>
  </div>
</template>

<script>
import NavbarDay from "@/components/NavbarDay";

export default {
  name: "Home",
  components: {
    NavbarDay
  },
  methods: {
    Resize() {
      window.onresize = ev => {
        // console.log(ev.target.innerWidth)
        if (ev.target.innerWidth > 800) {
          this.$router.push("/");
        }
      };
    },
  },
  // добавить mounted
  mounted(){
    this.Resize()
  }
};
</script>
