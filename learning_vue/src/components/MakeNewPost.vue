<template>
    <table>
        <tr>
            <td>
                <b-button v-b-modal.makePostModal id='makePostButton'>New Post</b-button>
            </td>
        </tr>

        <b-modal id='makePostModal'>
            Hello World!
        </b-modal>
    </table>
</template>

<script>
export default {
    name: 'MakeNewPost'
};
</script>

<style scoped>

table {
    width: 100%;
    vertical-align: center;
    text-align: right;
    border-style: double;
    margin-top: 0.5rem;
}

#makePostButton {
    margin: 0.25rem 0.5rem;
}

</style>
