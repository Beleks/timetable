<template>
  <div>
    <select-mobile></select-mobile>
    <weeks-mobile></weeks-mobile>
  </div>
</template>

<script>
import NavbarDay from "@/components/NavbarDay";
import SelectMobile from "@/components/SelectMobile";
import WeeksMobile from "@/components/WeeksMobile";

export default {
  name: "Home",
  components: {
    NavbarDay,
    SelectMobile,
    WeeksMobile,
  },
  methods: {
    Resize() {
      window.onresize = (ev) => {
        // console.log(ev.target.innerWidth)
        if (ev.target.innerWidth > 800) {
          this.$router.push("/");
        }
      };
    },
  },
  // добавить mounted
  mounted() {
    this.Resize();
  },
};
</script>
