<template>
  <el-container>
    <SideMenu></SideMenu>
    <el-container direction="vertical">
      <TopHeader></TopHeader>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default { name:'MainBox' }
</script>

<script setup>
import TopHeader from '@/components/mainbox/TopHeader.vue';
import SideMenu from '@/components/mainbox/SideMenu.vue';
 //import {ref, reactive} from 'vue'
</script>

<style scoped lang="scss">

</style>