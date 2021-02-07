<template>
  <div>
    <Header />
    <div id="app" class="row">
      <AlbumList @album-by-id="getDetailsById" />
      <AlbumDetails
        :albumDetails="{ ...albumDetails }"
        @albums-by-title="getAlbumsByTrackTitle"
      />
      <AlbumsFound
        :albumsByTitle="{ ...albumsByTitle }"
        @album-by-id="getDetailsById"
      />
    </div>
  </div>
</template>

<script>
import AlbumList from "./components/albumList.vue";
import AlbumDetails from "./components/albumDetails.vue";
import AlbumsFound from "./components/albumsFound.vue";
import Header from "./components/header.vue";

export default {
  name: "App",
  components: {
    AlbumList,
    AlbumDetails,
    AlbumsFound,
    Header,
  },
  methods: {
    getDetailsById: function (_id) {
      this.$api({
        method: "get",
        url: `/albums/albumdetails?albumid=${_id}`,
      }).then((res) => {
        console.log(res.data[0]);
        this.albumDetails = res.data[0];
      });
    },
    getAlbumsByTrackTitle: function (_str) {
      this.$api({
        method: "get",
        url: `/albums/titlesearch?str=${_str}`,
      }).then((res) => {
        this.albumsByTitle = res.data;
        console.log(this.albumsByTitle);
      });
    },
  },
  data: function () {
    return {
      albumDetails: {},
      albumsByTitle: [],
    };
  },

};
</script>
<style>
@font-face {
  font-family: "Raleway";
  src: url("./assets/Raleway-VariableFont_wght.ttf");
}
@font-face {
  font-family: "Raleway-Italic";
  src: url("./assets/Raleway-Italic-VariableFont_wght.ttf");
}
h1,
h2,
h3,
h4,
li {
  font-family: "Raleway";
}
h5,
p,
label {
  font-family: "Raleway-Italic";
}
body {
  background-image: url("./assets/white-gray-background.jpg");
}
</style>
