<template>
    <div id="page-wraper">
      <Header></Header>
      <Mywork></Mywork>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue";
  import Mywork from "@/components/Mywork.vue";
  
  export default {
    components:{
      Header,
      Mywork,
    }
  }
  </script>