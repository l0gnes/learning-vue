<template>
  <b-card
    class="userProfileCard d-flex-wrap d-inline-flex m-1 justify-content-center align-self-stretch bg-secondary text-white"
    :title="name"
    title-tag="h6"
    :img-src="avatar"
    img-top
  >
    <b-button variant="primary">
        View Profile
    </b-button>
  </b-card>
</template>

<script>
export default {
    name : 'UserProfileCard',
    props : {
        name : String,
        avatar : String,
    },
};
</script>

<style scoped>
.userProfileCard {
    width: 15vw;
}
</style>
