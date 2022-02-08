<template>
  <b-container fluid class="bg-dark text-white">
      <flex>
        <UserProfileCard
            v-for="user in users"
            v-bind:key="user.userid"
            v-bind:name="user.name"
            v-bind:avatar="user.avatar"
        />
      </flex>
  </b-container>
</template>

<script>
import UserProfileCard from '@/components/UserProfileCard.vue';

const chance = require('chance');

const n = new chance.Chance();
const avatarOffset = n.integer({
    min: 0,
    max: 1000
});

export default {
    name: 'UserList',
    data() {
        let userList = [];

        for (let i = 0; i < 50; i += 1) {
            userList.push(
                {
                    userid : i,
                    name : n.name({
                        nationality: 'en'
                    }),
                    avatar : `https://avatars.dicebear.com/api/big-smile/${avatarOffset + i}.svg`
                }
            );
        }

        return {
            users : userList
        };
    },
    components: {
        UserProfileCard,
    },
};
</script>

<style>

</style>
