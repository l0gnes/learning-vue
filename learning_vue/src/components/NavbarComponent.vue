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

            <!-- Attempting to do a right-aligned part on the navbar (like for user representation and stuff maybe?) -->
            <b-navbar-nav class='ml-auto'>
                <b-nav-item-dropdown variant='dark' right>
                    <template #button-content>
                        John Doe
                        <b-avatar variant="info" text="JD" size="2rem" class="mx-2"/>
                    </template>
                    <b-dropdown-group header="Personal">
                        <b-dropdown-item>
                            <b-icon-person-circle/>
                            Profile
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <b-icon-bell-fill/>
                            Notifications
                            <b-badge variant='info'>5</b-badge>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <b-icon-gear-fill/>
                            Preferences
                        </b-dropdown-item>
                    </b-dropdown-group>
                    <b-dropdown-group header="Other">
                        <b-dropdown-item>
                            <b-icon-people-fill/>
                            Friends
                            <b-badge variant="success">1 New</b-badge>
                        </b-dropdown-item>
                        <b-dropdown-item variant="danger">
                            <b-icon-box-arrow-right/>
                            Logout
                        </b-dropdown-item>
                    </b-dropdown-group>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>

</template>

<script>
export default {
    name: 'NavbarComponent'
};
</script>
