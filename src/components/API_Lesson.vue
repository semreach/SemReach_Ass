<template>
    <section class="section about-me" data-section="section1">
  <div class="container">
    <div class="section-heading">
      <h2>API Lesson</h2>
      <div class="line-dec"></div>
    </div>
    <div class="left-image-post">
      <div class="row">
        <Lesson_Card v-for="(course,index) in courses" :key="index" :title="course.title" :price="course.price" :short-description="course.shortDescription" :url="course.titleURL"></Lesson_Card>
      </div>
    </div>
  </div>
</section>

</template>


<script>
import Lesson_Card from '@/components/Lesson_Card.vue';
import axios from 'axios';
export default {
components:{
  Lesson_Card,
},
data(){
  return {
      courses:[],
  }
},
async created(){
  try {
    const response = await axios.get('https:///v1/courses/');
    // const response = await axios.get('/data-connection-count');
    const courses=response.data;
    // console.log(courses);
    this.courses = courses;
  } catch (error) {
    console.log("error coure api")
  }
}
}
</script>
