<template>
  <div>
    <Header />
    <div id="app" class="row">
      <AlbumList 
      @album-by-id="getDetailsById" 
      :albumsList="[...albumsList]"
      />
      <AlbumDetails
        v-if="albumDetails"
        :albumDetails="{ ...albumDetails }"
        @albums-by-title="getAlbumsByTrackTitle"
      />
      <AlbumsFound
        :albumsByTitle="{ ...albumsByTitle }"
        @album-by-id="getDetailsById"
      />
    </div>
    <Footer/>
    <Loader :is-visible="isLoading" />
  </div>
</template>

<script>
import AlbumList from "./components/albumList.vue";
import AlbumDetails from "./components/albumDetails.vue";
import AlbumsFound from "./components/albumsFound.vue";
import Header from "./components/header.vue";
import Loader from "./components/loader.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    AlbumList,
    AlbumDetails,
    AlbumsFound,
    Header,
    Loader,
    Footer
  },
  methods: {
    getDetailsById: function (_id) {
      this.isLoading = true;
      this.$api({
        method: "get",
        url: `/albums/albumdetails?albumid=${_id}`,
      }).then((res) => {
        console.log(res.data[0]);
        this.albumDetails = res.data[0];
        this.isLoading = false;
      });
    },
    getAlbumsByTrackTitle: function (_str) {
      this.isLoading = true;
      this.$api({
        method: "get",
        url: `/albums/titlesearch?str=${_str}`,
      }).then((res) => {
        this.albumsByTitle = res.data;
        console.log(this.albumsByTitle);
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.isLoading = true;
    this.$api("albums").then((res) => {
      console.log(res.data);
      this.albumsList = res.data;
      this.isLoading = false;
    });
  },
  data: function () {
    return {
      isLoading: false,
      albumDetails: {},
      albumsByTitle: [],
      albumsList: [],
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
  background-image: url("./assets/seamless5-lighter.jpg");
}
</style>
