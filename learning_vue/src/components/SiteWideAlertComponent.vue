<template>
    <b-alert show :variant="variant" class='my-1'>
        <h4>
            {{ title }}
        </h4>
        <hr/>
        {{ caption }}
    </b-alert>
</template>

<script>
export default {
    name: 'SideWideAlertComponent',
    props : {
        title : String,
        caption : String,
        variant : String,
    }
};
</script>

<style scoped>

</style>
