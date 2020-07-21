<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div></div>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      info: null
    };
  },
  beforeMount() {},
  mounted() {},
  methods: {
    getSize(string) {
      console.log(string);
    }
    // ResizeTest() {
    //   window.onresize = ev => {
    //     // console.log(ev.target.innerWidth)
    //     if (ev.target.innerWidth > 800) {
    //       this.$router.push("/");
    //     }
    //   };
    // }
  },
  beforeCreate: function() {
    if (document.documentElement.clientWidth > 800) {
      this.$router.push("/");
    } else if (document.documentElement.clientWidth <= 800) {
      this.$router.push("/home");
    }
    this.$store.dispatch("getTimetable");
  },
  created: function() {
    this.getSize("created");
  },
  mounted() {
    this.getSize("mounted");
  },
  beforeMount: function() {
    this.getSize("beforeMount");
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
