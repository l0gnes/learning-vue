<template>
  <b-container
    fluid
    class='p-0'
  >
    <!--<img alt='Vue logo' src='../assets/logo.png'>-->
    <b-jumbotron
      header='Welcome to Alexs New Bad Website'
      lead='You wont find one that is worse than this.'
      id='mainJumbotron'
      class='px-5 mb-0'
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
    <hr>
    <MakeNewPost/>
    </b-jumbotron>

    <b-container class='bg-dark text-white py-4 text-left px-5' fluid>

      <b-row>
        <b-col>
          <h2>Redfining stupidity <b-icon-pen/></h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elementum lorem. Morbi a magna lacus. Aenean eu lobortis erat, vitae rhoncus lacus. Curabitur sed purus dapibus, tempor arcu nec, pharetra metus. Donec tellus nisi, varius vel hendrerit sit amet, euismod sollicitudin ante. Mauris bibendum hendrerit lacus ac convallis. Quisque nec neque in leo cursus posuere. Morbi molestie placerat velit. Sed sit amet blandit nulla, vel pharetra neque. Nullam vitae metus dolor. In vulputate sed metus eget scelerisque. Donec dui risus, lacinia eget sem id, volutpat dictum lectus. Quisque dignissim, turpis eget volutpat viverra, tortor justo hendrerit felis, eget vestibulum eros sapien eu turpis.
          </p>
          <p>
            Maecenas condimentum velit ut tristique faucibus. Ut consequat eu urna at tempus. Morbi malesuada sem vitae bibendum molestie. Aliquam erat volutpat. Vivamus a massa enim. Etiam consectetur, quam at congue faucibus, nunc magna dictum erat, eleifend gravida diam nisl eget leo. Duis ac luctus felis, vel sollicitudin leo. Nullam eget mauris et ligula lacinia feugiat. Vestibulum ac massa ante. Nunc tempor fringilla urna, sit amet pulvinar lectus sollicitudin sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras enim nibh, faucibus nec vestibulum a, finibus sed arcu. Donec vitae sodales erat. Nunc et tincidunt dui. Phasellus vehicula lectus eros, nec dignissim arcu varius ut.
          </p>
          <p>
            Aenean faucibus arcu nibh, quis molestie ante consequat vel. Curabitur vel magna mattis nunc tincidunt varius. Praesent in ornare diam. Donec quis malesuada orci. Nam sed libero vitae neque cursus consequat. Aenean lacinia sed sapien a feugiat. Morbi ante erat, dictum a sapien vitae, ultricies ornare augue. Mauris pretium enim leo, a hendrerit arcu tempus sit amet. Suspendisse blandit interdum finibus. Donec interdum fermentum convallis. Nam maximus malesuada libero. In nec maximus purus, ut feugiat orci. Etiam faucibus neque leo, auctor sodales quam pretium in. Aliquam fermentum convallis libero sed euismod.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate mattis lacus, euismod vulputate nisi rhoncus quis. Etiam dignissim consectetur iaculis. Morbi congue risus vel semper vehicula. Donec metus felis, convallis sed lectus a, accumsan cursus erat. Fusce quis felis sed libero faucibus efficitur eget sed orci. Aenean gravida dictum neque, id accumsan tortor accumsan et. Nullam malesuada eleifend molestie. Etiam volutpat ultricies faucibus. Mauris ac mi eros. Quisque tincidunt tempor felis, id lacinia neque maximus eu. Suspendisse hendrerit turpis vitae nisl sagittis, ac interdum sem hendrerit. Donec a nulla eu mauris convallis ornare quis ut mauris.
          </p>
          <p>
            Nullam interdum massa ante, eget congue sapien iaculis sed. Suspendisse sit amet augue non leo mollis pellentesque non sed sapien. Fusce dignissim augue at turpis consectetur ullamcorper. Ut vel turpis non urna placerat rhoncus ac in lectus. Nulla in mi tempor urna malesuada maximus congue non ipsum. Nulla vestibulum porta luctus. Pellentesque quis purus sed nisl gravida ultricies eget condimentum lacus. Praesent vitae porta leo. Nunc bibendum dui vitae porttitor porttitor. Pellentesque aliquet purus et ligula convallis congue quis sed felis. Quisque vehicula vestibulum enim, ut posuere lorem egestas in. Donec vestibulum metus suscipit, posuere ex nec, imperdiet urna.
          </p>
        </b-col>

        <b-col>
          <h2>
            The Latest <b-icon-newspaper/>
          </h2>
          <hr/>
          <b-container style='overflow-y:scroll;' fluid>
            <PostContainer
            v-for='post in posts'
            v-bind:key='post.id'
            v-bind:postHeader='post.header'
            v-bind:postContent='post.content'
            v-bind:postImage='post.image'
          ></PostContainer>
          </b-container>
        </b-col>
      </b-row>

    </b-container>

    <b-container class='my-4' fluid>

      <h1>You thought you were done?</h1>
      <hr>

      <p>
        You're funny if you thought you were, but no, there's still more to this page!
      </p>

      <hr/>

      <b-row>
        <b-col>
          <h2>Did you know snails can taste?</h2>
          <p>
            A good number of snails can actually taste different things, and eat them too! I wonder if snails can also smell, breathe, feel pain, and cry.
          </p>
          <b-progress class='mt-2' show-value :max=21>
            <b-progress-bar :value='3' variant="success"/>
            <b-progress-bar :value='6' variant="warning"/>
            <b-progress-bar :value='12' variant="danger"/>
          </b-progress>
        </b-col>

        <b-col>
          Wow!
        </b-col>
      </b-row>

    </b-container>

  </b-container>
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
#mainJumbotron {
  text-align: left;
}
</style>
