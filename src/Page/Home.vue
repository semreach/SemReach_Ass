<template>
    <div id="page-wraper">
      <Header></Header>
      <About></About>
      <API></API>
      <service></service>
      <Mywork></Mywork>
      <Contact></Contact>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue";
  import About from "@/components/About.vue";
  import API from "@/components/API.vue";
  import Service from "@/components/Service.vue";
  import Mywork from "@/components/Mywork.vue";
  import Contact from "@/components/Contact.vue";
  
  
  export default {
    components:{
      Header,
      About,
      API,
      Service,
      Mywork,
      Contact,
    }
  }
  </script>