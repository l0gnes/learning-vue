<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostContainer postHeader="Hello World!" postContent="Lorem ipsum" postImage="logo.png"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostContainer from '@/components/PostContainer.vue';

export default {
	name: 'Home',
	components: {
    PostContainer,
	},
};
</script>
