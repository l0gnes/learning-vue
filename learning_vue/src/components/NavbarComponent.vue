<template>

    <b-navbar toggeable='lg' type='dark' variant="dark">
        <b-navbar-brand href='#'>Lognes</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id='nav-collapse' is-nav>
            <b-navbar-nav>
                <b-nav-item to='' active-class="active">Home</b-nav-item>
                <b-nav-item to='about' active-class="active">About Me</b-nav-item>
                <b-nav-item to='hometown' active-class="active">Hometown</b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>

</template>

<script>
export default {
    name: 'NavbarComponent'
};
</script>

<style scoped>
table {
    margin-top: 0.5rem;
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-style: double;
}
</style>
