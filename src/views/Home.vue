<template>
  <div>
    <select-mobile></select-mobile>
  </div>
</template>

<script>
import NavbarDay from "@/components/NavbarDay";
import SelectMobile from '@/components/SelectMobile'

export default {
  name: "Home",
  components: {
    NavbarDay, SelectMobile
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
