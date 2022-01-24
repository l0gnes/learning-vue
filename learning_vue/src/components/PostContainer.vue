<template>
    <b-card
        img-src="https://picsum.photos/200/200?random"
        img-left class='mb-2 bg-dark text-white'
    >
        <b-card-text>
            <h3>
                {{ postHeader }}
            </h3>
            <hr>
            <p>
                {{ postContent }}
            </p>
            <b-button variant="info">
                Show More <b-icon-link45deg/>
            </b-button>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
	name: 'PostContainer',
	props: {
        postHeader : String,
        postContent : String,
        postImage : String
    }
};
</script>

<style scoped>

img {
    width: 20vw;
    height: 20vw;
    margin: 0.25rem;
}

table {
    border-style: double;
    width: 100%;
    margin: 0.5rem 0;
}

td {
    width: 100%;
    text-align: left;
    vertical-align: top;
    padding-left: 1rem;
}

</style>
