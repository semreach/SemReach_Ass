<template>
    <div id="page-wraper">
      <Header></Header>
      <Contact></Contact>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue";
  import Contact from "@/components/Contact.vue";
  
  export default {
    components:{
      Header,
      Contact,
    }
  }
  </script>