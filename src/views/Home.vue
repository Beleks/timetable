<template>
  <div class="container">
    <select-mobile></select-mobile>
    <weeks-mobile></weeks-mobile>
    <days-mobile></days-mobile>
    <class-mobile></class-mobile>
  </div>
</template>

<script>
import SelectMobile from "@/components/SelectMobile";
import WeeksMobile from "@/components/WeeksMobile";
import DaysMobile from '@/components/DaysMobile'
import ClassMobile from '@/components/ClassMobile'

export default {
  name: "Home",
  components: {
    SelectMobile,
    WeeksMobile,
    DaysMobile,
    ClassMobile
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
<style lang="scss" scoped>
.container{
  max-width: 500px;
  margin: auto;
}
</style>