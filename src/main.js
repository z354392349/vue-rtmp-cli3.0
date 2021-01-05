import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// rtmp 播放插件 全局引入
// import VueVideoPlayer from "vue-video-player";
// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";
// import "videojs-flash";
// Vue.use(VueVideoPlayer);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
