<template>
    <div>

        <b-button v-b-modal.makePostModal id='makePostButton'><b-icon icon='plus'></b-icon> New Post</b-button>

        <b-modal id='makePostModal'
            title="Create a new post!"
            @ok='onSubmit'
            @close='onReset'
            ok-title='Submit'
            centered
        >

            <b-form @submit="onSubmit" @reset="onReset" v-if='show'>
                <b-form-group
                    id='input-group-1'
                    label='Header'
                    label-for='headerInput'
                    description="Write a catchy tagline!"
                >
                    <b-form-input
                        id='headerInput'
                        v-model='form.header'
                        type='text'
                        placeholder='Header Text'
                        required
                        autocomplete="off"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id='input-group-2'
                    label='Post Body'
                    label-for='postBody'
                    description='Let us know everything!'
                >
                    <b-form-textarea
                        id='postBody'
                        v-model='form.body'
                        type='text'
                        placeholder="Post Content"
                        required
                        autocomplete="off"
                    ></b-form-textarea>
                </b-form-group>

            </b-form>

        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'MakeNewPost',
    data() {
        return {
            form: {
                header: '',
                body : ''
            },
            show: true
        };
    },
    methods : {
        onSubmit() {
            this.$bvToast.toast(
                'Post has been created!',
                {
                    title: 'Status Update',
                    autoHideDelay: 2500,
                    appendToast: true,
                    variant: 'success',
                    toaster: 'b-toaster-bottom-right'
                }
            );
            this.onReset(); // reset the table stuff again
        },
        onReset() {
            this.form.header = '';
            this.form.body = '';
        }
    }
};
</script>
