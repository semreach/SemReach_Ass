<template>
    <div id="page-wraper">
      <Header></Header>
      <service></service>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue";
  import Service from "@/components/Service.vue";
  
  export default {
    components:{
      Header,
      Service,
    }
  }
  </script>