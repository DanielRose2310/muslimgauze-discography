<template>
  <div class="border-1  col-3 border-left text-center">
    <div
      v-for="taggedalbum in albumsByTitle"
      v-bind:key="taggedalbum._id"
      class="py-5 albumsitem"
    >
      <p>{{ taggedalbum.albumtitle }} ({{taggedalbum.year}})</p>
      <img :src="taggedalbum.image" @click="emitAlbumId(taggedalbum._id)"  class="w-50" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["albumsByTitle"],
  methods: {
        emitAlbumId: function (_id) {
      this.$emit("album-by-id", _id); 
    },
  },
};
</script>
<style>
.albumsitem{
    cursor: pointer;
}
.albumsitem:hover{
    color: grey;
}
</style>