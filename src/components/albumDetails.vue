<template>
  <div class="col-5 text-center  detailsdiv">
    <img class="w-75" :src="albumDetails.image">
    <h5 class="mb-3">{{ albumDetails.albumtitle }}</h5>
    <p>Format: {{ albumDetails.format }}</p>
    <p>Year: {{ albumDetails.year }}</p>
    <p>Catalog: {{ albumDetails.catalog }}</p>
    <h5>Tracks:</h5>
    <ol class="text-left">
      <li
        class="offset-2"
        v-for="track in tracks"
        :key="track.uuid"
        @click="emitTrackTitle(track.tracktitle)"
      >
        {{ track.tracktitle }} - {{ track.trackduration }}
      </li>
    </ol>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

export default {

  props: {
    albumDetails: {
      type: Object,
      albumtitle: { type: String },
      format: { type: String },
      year: { type: String },
      catalog: { type: String },
      tracklist: { type: Array, default: [] },
    },
  },
  methods: {
    emitTrackTitle: function (_str) {
      this.$emit("albums-by-title", _str);
    },
    getAlbumsByTrackTitle: function (_str) {
      this.$api({
        method: "get",
        url: `http://localhost:3000/tracks/titlesearch?str=${_str}`,
      }).then((res) => {
        this.albumsByTitle = res.data;
        console.log(this.albumsByTitle);
      });
    },
  },
  computed: {
    tracks() {
      if (this.albumDetails.tracklist){
      return this.albumDetails.tracklist.map((track) => track, {
        uuid: uuidv4(),
      });
    } else return null;
    }
  },
};
</script>
<style>
li {
  cursor: pointer;
}
li:hover {
  color: grey;
}
.detailsdiv {
  /* #F6F2F0 */
  overflow-y: auto;
  height: 1000px;
}
</style>