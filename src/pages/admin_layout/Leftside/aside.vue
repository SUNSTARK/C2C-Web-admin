<template>
  <div>
    <el-aside id="asideNav">
      <div class="logo-name">
        <p v-if="$store.getters.logoShow"><img src='@/assets/logo.png' class="logo-img"></p>
        <p v-else>C2C众包后台管理</p>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        router
        background-color="#21282E"
        text-color="#999999"
        active-text-color="#FFFFFF"
        :collapse="$store.getters.isCollapse">
        <el-menu-item v-if="site.children.length>0 && site.alone==true" v-for="(site,i) in navList" :key="i" :index="site.children[0].path">
          <i :class="site.icon"></i>
          <span> {{ site.name }}</span>
        </el-menu-item>
        <el-submenu v-if="site.children.length>0 && site.alone==false" v-for="(site,index) in navList" :key="index" :index="site.children[0].path">
          <template slot="title">
            <i :class="site.icon"></i>
            <span>{{ site.name }}</span>
          </template>
          <el-menu-item-group v-if="site.children.length>0 && site.alone==false" v-for="(item,index) in site.children" :key="index">
            <el-menu-item :index="item.path">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "asideNav",
  data() {
    return {
      navList:this.$store.getters.routers[0]
    }
  }
}
</script>

<style>
  #asideNav .logo-name {
    width: 100%;
  }

  #asideNav .el-menu-vertical:not(.el-menu--collapse) {
    height: 100%;
  }

  #asideNav {
    width: auto !important;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
  }
  #asideNav .logo-name {
    background-color: #21282E !important;
    font-weight: 600;
    font-family: 微软雅黑;
    z-index: 999;
  }
  #asideNav .logo-name p {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: white;
  }
  #asideNav .el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
    overflow-y: scroll;
  }
  #asideNav .el-menu {
    flex: 1;
    overflow: inherit;
    border-right: none;
  }
  #asideNav .el-menu::-webkit-scrollbar {
    display: none;
  }
  #asideNav .el-menu .fa {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
  #asideNav .el-menu .el-menu-item {
    background-color: #21282E !important;
    border-bottom: 1px solid #21282E;
  }
  /*导航项悬浮特效*/
  #asideNav .el-menu .el-menu-item:hover {
    color: #ffffff !important;
    font-weight: bold;
    background-color: #375573 !important;
  }
  /*选中特效*/
  #asideNav .el-menu .el-menu-item.is-active {
    background-color: #56a9ff !important;
    font-weight: bold;
  }
  #asideNav .el-menu .is-opened > .el-submenu__title > .el-icon-arrow-down {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
  }
  .logo-img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>
