<template>
    <table>
        <tr>
            <th colspan=3>
                Alex's Bad Site
            </th>
        </tr>
        <tr>
            <td>
                <router-link to="/">Home</router-link>
            </td>
            <td>
                <router-link to="/about">About</router-link>
            </td>
            <td>
                <router-link to="/hometown">Hometown</router-link>
            </td>
        </tr>
    </table>
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
