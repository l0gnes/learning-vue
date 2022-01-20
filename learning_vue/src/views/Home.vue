<template>
  <div class='home'>
    <MakeNewPost/>
    <!--<img alt='Vue logo' src='../assets/logo.png'>-->
    <PostContainer
      v-for='post in posts'
      v-bind:key='post.id'
      v-bind:postHeader='post.header'
      v-bind:postContent='post.content'
      v-bind:postImage='post.image'
    ></PostContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import PostContainer from '@/components/PostContainer.vue';
import MakeNewPost from '@/components/MakeNewPost.vue';
import postData from '@/assets/postData.json';

function fetchPostData() {
  return postData;
}

export default {
	name: 'Home',
	components: {
    PostContainer,
    MakeNewPost
	},
  data() {
    return {
      posts : fetchPostData()
    };
  }
};
</script>
