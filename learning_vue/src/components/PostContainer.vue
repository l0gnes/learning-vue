<template>
    <table>
        <tr>
            <td>
                <img :src="require(`../assets/${postImage}`)"/>
            </td>
            <td>
                <h1>
                    {{ postHeader }}
                </h1>
                <p>
                    {{ postContent }}
                </p>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
	name: 'PostContainer',
	props: {
        postHeader : String,
        postContent : String,
        postImage : URL
    },
};
</script>

<style scoped>

</style>
