<template>
    <b-container class="test bg-secondary text-white py-4" fluid>

        <h3>Lognes Music Library</h3>

        <flex>
            <MusicCard
                v-for="song in songs"
                v-bind:key="song.id"
                v-bind:name="song.song_name"
                v-bind:artist="song.artist_name"
            />
        </flex>

    </b-container>
</template>

<script>
import MusicCard from '@/components/MusicCard.vue';

export default {
    name : 'Audio',
    components : {
        MusicCard
    },
    data() {
        return {
            songs : [
                {
                    id : 0,
                    song_name : 'Shreddy Kreuger',
                    artist_name : 'Manwolves'
                },
                {
                    id : 1,
                    song_name : 'Dead Crab Exoskeleton',
                    artist_name : 'Rieu'
                }
            ]
        };
    }
};
</script>
