<template>
  <div id="page-wraper">
    <Header></Header>
    <API_Lesson></API_Lesson>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import API_Lesson from "@/components/API_Lesson.vue";

export default {
  components:{
    Header,
    API_Lesson,
  }
}
</script>