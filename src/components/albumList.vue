<template>
  <div class="listdiv col-5 border-right border-1">
    <div
      v-for="album in albums"
      v-bind:key="album._id"
      class="d-flex flex-row my-5  justify-content-start py-2 listitem"
      @click="emitAlbumId(album._id)"
    >
    <div  class="offset-2 w-25">
   <router-link :to ="{query: {album: album._id}}"> 
     <img :src="album.image"  class=" w-50" />
     </router-link> 
     </div>
      <span class=" w-25">
        <h4>
          {{ album.albumtitle }}
        </h4>

        <p>
          {{ album.year }}
        </p>
      </span>
    </div>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      albums: [],
    };
  },
  methods: {
    emitAlbumId: function (_id) {
      this.$emit("album-by-id", _id);
    },
  },
  emits: ["album-id"],
  mounted() {
    this.$api("albums").then((res) => {
      console.log(res.data);
      this.albums = res.data;
    });
  },
    created() {
      console.log(this.$router.history.current.query)
    if(this.$router.history.current.query.album)
    {this.emitAlbumId(this.$router.history.current.query.album)}
      return this.$router.history.current.query;
    
  },
};
</script>
<style>
.listdiv {
  overflow-y: auto;
  height: 1000px;
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
  word-wrap:normal;
}
</style>
