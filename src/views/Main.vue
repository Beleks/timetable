<template>
  <div>
    <div class="header"></div>
    <div class="week?"></div>
    <div class="table">
      <div class="time row-6">
        <div>09:00</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="day-name row-6">
        <div>Пн</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="day-of-week row-6">
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
        <main-para></main-para>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import MainPara from '@/components/MainPara'
export default {
  components:{
    MainPara
  }
}
</script>
<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-rows: minmax(auto, min-content) repeat(5, minmax(auto, min-content) 1fr);
}
.row-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.day-name{
  max-height: 40px;
}
</style>