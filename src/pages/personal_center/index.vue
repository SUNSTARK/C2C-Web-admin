<template>
  <el-container class="main">
    <Aside id="useraside"/>
    <el-container>
      <router-view :key="$route.fullPath"/>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from './Aside'
  import userheader from '../user_layout/header'

  export default {
    name: "index",
    components: {Aside, userheader}
  }
</script>

<style scoped>
  .main {
    padding: 0 0px;
  }

  .title {
    line-height: 60px;
    margin: 0 20px;
    font-weight: 600;
    font-size: 16px;
  }

  #useraside {
    margin-left: 0px;
  }
</style>
