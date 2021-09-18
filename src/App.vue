<template>
  <div id="app">
    <router-link to="/home" class="link">Home</router-link>
    <router-link to="/create-post" class="link">Create Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
.link
{
  padding: 25px 30px;
  text-decoration: none;
  color:black
}
</style>
