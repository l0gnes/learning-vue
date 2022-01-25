<template>
    <b-col fluid>
        <b-avatar size='6rem' :variant='variant' :text='initials' badge :badge-variant='randomStatus' src='https://placekitten.com/600/600'/>

        <h6 class='py-3'>
            {{ name }}
        </h6>

        <hr>

        <b-button-group>
            <b-button>
                <b-icon-bookmark></b-icon-bookmark> Portfolio
            </b-button>
            <b-button>
                <b-icon-heart/> Sponsor
            </b-button>
        </b-button-group>

    </b-col>
</template>

<script>
export default {
    name: 'UserAboutCard',
    props: {
        name : String,
        variant : String
    },
    computed : { // You love to see it you really do
        initials() {
            let parts = this.name.split(' ');

            let initials = [];
            for (let i = 0; i < parts.length; i += 1) {
                initials.push(parts[i][0].toUpperCase());
            }

            const display = initials.join('');
            return display;
        },
        randomStatus() {
            const validStatuses = ['success', 'warning', 'danger', 'info'];
            return validStatuses[Math.floor(Math.random() * validStatuses.length)];
        }
    }
};
</script>
