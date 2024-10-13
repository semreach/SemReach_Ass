<template>
      <!-- Sidebar Menu -->
      <div class="responsive-nav">
        <i class="fa fa-bars collapse" id="menu-toggle"></i>
        <div id="menu" class="menu">
          <i class="fa fa-times" id="menu-close"></i>
          <div class="container">
            <div class="image">
              <router-link to="/" href="#"><img src="assets/images/logo.png" alt="" /></router-link>
            </div>
            <div class="author-content">
              <h4>{{ $t("name") }}</h4>
              <span>{{ $t("web") }}</span>
            </div>

			<!-- <h6 ><button @click="changeLng" style="background-color: red; color: white;">{{ $t("lang") }}</button></h6> -->
		<button @click="changeLng('en')" id="changeLng" class="btn btn-primary"><img :src="imgs[currentImage]" id="img" alt="" height="20px"/></button>

            <nav class="main-nav" role="navigation">
              <ul class="main-menu">
                <li><router-link to="/about" href="#section1">{{ $t("about") }}</router-link></li>
                <li><router-link to="/api_lesson" href="#section5">{{ $t("api_lesson") }}</router-link></li>
                <li><router-link to="/mywork" href="#section3">{{ $t("mywork") }}</router-link></li>
                <li><router-link to="/service" href="#section2">{{ $t("service") }}</router-link></li>
                <li><router-link to="/contact" href="#section4">{{ $t("contact") }}</router-link></li>
              </ul>
            </nav>
            <div class="social-network">
              <ul class="soial-icons">
                <li>
                  <a href="https://www.facebook.com/reach.sem.9/" target="_blank"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
            
				        <li>
                  <a href="https://t.me/semreach" target="_blank">T</a>
                </li>
				        <li>
                  <a href="#" target="_blank">G</a>
                </li>
                <!-- <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li> -->
                <!-- <li>
                  <a href="#"><i class="fa fa-rss"></i></a>
                </li> -->
              </ul>
            </div>
            <div class="copyright-text">
              <p>Copyright 2024 Reach KH</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      currentImage:1,
      imgs:[
        "assets/images/Flag_eng.png","assets/images/Flag_kh.png"
      ],
    }
  },
  name: "App",
  methods: {
    changeLng() {
      console.log(this.$i18n.locale);
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        this.currentImage=0;
      } else {
        this.$i18n.locale = "en";
        this.currentImage=1;
      }
    },
  },
};
</script>