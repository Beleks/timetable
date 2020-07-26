<template>
  <div>
    <select-mobile></select-mobile>
    <weeks-mobile></weeks-mobile>
    <days-mobile></days-mobile>
  </div>
</template>

<script>
import SelectMobile from "@/components/SelectMobile";
import WeeksMobile from "@/components/WeeksMobile";
import DaysMobile from '@/components/DaysMobile'

export default {
  name: "Home",
  components: {
    SelectMobile,
    WeeksMobile,
    DaysMobile,
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
