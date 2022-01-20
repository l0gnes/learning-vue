<template>
    <table>
        <tr>
            <th>
                <img :src="require(`../assets/${postImage}`)"/>
            </th>
            <td>
                <h3>
                    {{ postHeader }}
                </h3>
                <hr/>
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
