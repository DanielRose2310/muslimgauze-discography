<template lang="">
    <div>
        <div class="d-flex flex-column pt-5 col-12">
        <div class="d-block mx-auto">
            <img src="../assets/dividerBryn3(trans).png">
        </div>
        <span class="row justify-content-end mt-5 pb-2 pr-2">
        <p class="my-auto mr-1">© DANIEL ROSENBERG {{this.year}}</p><a href="https://github.com/DanielRose2310" target="_blank" rel="noreferrer"><img class="giticon" alt="github" src="../assets/GitHub-Mark-64px.png"></a>
        </span>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
      this.year=new Date().getFullYear()
    }
};
</script>
<style >
div {
  bottom: 0;
}
p{
    font-size: 14px;
}
.giticon{
    width:22px;
}
</style>