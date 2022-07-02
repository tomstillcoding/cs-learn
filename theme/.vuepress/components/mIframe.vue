<!-- .vuepress/components/mIframe.vue-->
<template>
  <iframe
    class="m-iframe"
    width="100%"
    frameborder="no"
    scrolling="no"
    seamless=""
    allowfullscreen="allowfullscreen"
    :src="src"
    v-if="src"
  ></iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.initIframe();
    window.onresize = () => {
      this.initIframe();
    };
  },
  methods: {
    initIframe() {
      const iframeList = document.getElementsByClassName("m-iframe");
      if (!iframeList.length) return;
      const width = document.getElementsByClassName("m-iframe")[0].scrollWidth;
      for (let i = 0; i < iframeList.length; i++) {
        iframeList[i].style.height = `${width * 0.75}px`;
      }
    },
  },
};
</script>
