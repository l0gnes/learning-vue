<template>
  <div class='home'>
    <!--<img alt='Vue logo' src='../assets/logo.png'>-->
    <b-jumbotron
      header='Welcome to Alexs New Bad Website'
      lead='You wont find one that is worse than this.'
    >
    <b-button-group>
      <b-button>
        Buy me a Coffee <b-icon-cup-fill></b-icon-cup-fill>
      </b-button>
      <b-button>
        Explore the World! <b-icon-globe></b-icon-globe>
      </b-button>
      <b-button href='https://github.com/l0gnes'>
        View Projects <b-icon-github></b-icon-github>
      </b-button>
    </b-button-group>
    </b-jumbotron>

    <MakeNewPost/>

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

<style scoped>
.jumboButtonGroup {
  color: blue;
}
</style>
