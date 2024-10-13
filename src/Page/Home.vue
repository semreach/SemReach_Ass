<template>
    <div id="page-wraper">
      <Header></Header>
      <About></About>
      <API_Lesson></API_Lesson>
      <service></service>
      <Mywork></Mywork>
      <Contact></Contact>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue";
  import About from "@/components/About.vue";
  import API_Lesson from "@/components/API_Lesson.vue";
  import Service from "@/components/Service.vue";
  import Mywork from "@/components/Mywork.vue";
  import Contact from "@/components/Contact.vue";
  
  
  export default {
    components:{
      Header,
      About,
      API_Lesson,
      Service,
      Mywork,
      Contact,
    }
  }
  </script>