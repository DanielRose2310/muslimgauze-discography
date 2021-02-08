<template>
  <vue-custom-scrollbar
    class="scroll-area listdiv col-4 border-right border-1"
    :settings="settings"
    @ps-scroll-y="scrollHanle"
  >
    <div
      v-for="album in albumsList"
      v-bind:key="album._id"
      class="d-flex flex-row my-5 justify-content-start py-2 listitem"
      @click="emitAlbumId(album._id)"
    >
      <div class="offset-2 w-25">
        <router-link :to="{ query: { album: album._id } }">
          <img :src="album.image" class="w-50" />
        </router-link>
      </div>
      <span class="w-25">
        <h4>
          {{ album.albumtitle }}
        </h4>

        <p>
          {{ album.year }}
        </p>
      </span>
    </div>
  </vue-custom-scrollbar>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    vueCustomScrollbar,
  },
  props: ['albumsList'],
  settings: {
    suppressScrollY: false,
    suppressScrollX: false,
    wheelPropagation: false,
  },
  methods: {
    emitAlbumId: function (_id) {
      this.$emit("album-by-id", _id);
    },
    scrollHanle(evt) {
      console.log(evt);
    },
  },
  emits: ["album-id"],
  created() {
    console.log(this.$router.history.current.query);
    if (this.$router.history.current.query.album) {
      this.emitAlbumId(this.$router.history.current.query.album);
    }
    return this.$router.history.current.query;
  },
};
</script>
<style>
.listdiv {
  overflow-y: auto;
  height: 900px;
}
.listitem {
  cursor: pointer;
}
.listitem:hover {
  color: grey;
}
h4,
p,
div {
  word-wrap: normal;
}
</style>
