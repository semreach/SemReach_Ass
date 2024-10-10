<template>
  <div id="page-wraper">
    <Header></Header>
    <API></API>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import API from "@/components/API.vue";

export default {
  components:{
    Header,
    API,
  }
}
</script>