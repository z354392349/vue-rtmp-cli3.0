<template>
  <div class="m-box">
    <videoPlayer
      class="vjs-custom-skin videoPlayer"
      :options="playerOptions"
      @pause="onPlayerPause($event)"
      ref="videoPlayer"
    ></videoPlayer>
    <div @click="showVideo" class="btn">2323</div>
  </div>
</template>

<script>
import "vue-video-player/src/custom-theme.css"; // 引入样式
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player"; // 如果使用全局引入 这句话可以不写，
import "videojs-flash"; // 如果使用全局引入 这句话可以不写，
import SWF_URL from "videojs-swf/dist/video-js.swf";
export default {
  components: {
    videoPlayer, // 如果使用全局引入 这句话可以不写，
  },

  // rtmp://58.200.131.2:1935/livetv/hunantv
  data() {
    return {
      playerOptions: {
        height: "300",
        width: "600",
        flash: {
          // hls: { withCredentials: false },
          swf: SWF_URL,
        },
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://58.200.131.2:1935/livetv/hunantv",
          },
        ],
        techOrder: ["flash"],
        autoplay: true,
        controls: true,
      },
    };
  },
  methods: {
    showVideo() {
      let myPlayer = this.$refs.videoPlayer.player;

      // 用于多个视频源直接切换，但是现在只有一个视频源，
      myPlayer.src("rtmp://58.200.131.2:1935/livetv/hunantv");
    },

    onPlayerPause(player) {
      console.log(player);
    },
  },
};
</script>

