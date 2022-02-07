<template>
    <b-card
        class = "songCard flex-grow-1 flex-fill text-left d-inline-flex mx-1"
        text-variant="dark"
        :title = "name"
        :sub-title = "artist"
        img-left
        img-src = "https://recordsale.de/assets/record_placeholder-f3f829566497dc26b0abfae50ddeb5c7bc48fe1c58dc1c7fe62a26d64988b9c9.svg"
    >
    <b-button-group class="my-2">
        <b-button>
            View Song
        </b-button>
    </b-button-group>
    </b-card>
</template>

<script>
export default {
    name : 'MusicCard',
    props : {
        name : String,
        artist : String
    }
};
</script>

<style scoped>

.songCard {
    max-height: 10rem;
}

.songCard > img {
    max-height: 10rem;
}

</style>
