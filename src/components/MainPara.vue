<template>
  <div class="para">
    <div class="header">
      <div
        class="number"
        :class="{number_green: para_green,
    number_blue: !para_green}"
      >{{testNum}}</div>
      <div class="room">а.8234 геол</div>
    </div>
    <div class="section">{{testText}}</div>
    <div class="footer">
      <div>ХАНДУЕВА В.Д.</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    textContent: String,
    weekEn: String,
    testText: String,
    testNum: Number,
    para_green: Boolean,
  },
  computed: {},
  beforeCreate() {},
};
</script>>
<style lang="scss" scoped>
.para {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: 0.78rem;
  border: 10px;
  padding: 0.3em;
  margin: 0.2em;

  box-shadow: 0px 0px 16px 0px rgba(166, 166, 166, 0.27);
  border-radius: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .number {
      // background-color: rgba(70, 90, 220, 0.91);
      color: white;
      border-radius: 10px;
      padding: 0.2em 0.5em;
    }

    .room {
      background-color: rgba(251, 138, 0, 0.8);
      border-radius: 10px;
      padding: 0.1em 0.3em;
      color: white;
    }
  }
  .section {
    margin-top: 0.2em;
  }
  .footer {
    font-size: 0.75rem;
    margin-top: 0.2em;
    font-style: italic;
    display: flex;
    justify-content: center;
    div {
      border-bottom: 1px solid grey;
    }
  }
}
.number_green {
  background-color: rgb(50, 183, 108);
}
.number_blue {
  background-color: rgba(70, 90, 220, 0.91);
}
@media (min-width: 1400px) {
  .section {
    font-size: 0.9rem;
  }
}
</style>