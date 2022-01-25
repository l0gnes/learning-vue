<template>
  <b-container fluid>
    <b-row>
      <b-col class='bg-secondary py-4 text-white'>
        <b-avatar
        variant="primary"
        text='AL'
        size='6rem'
        class='mb-4'
      >
      </b-avatar>
      <h2>
        Hello World!
      </h2>
      <hr>
      <p>
        Can you believe that the sky is blue? Neither can I!
      </p>
      <hr>
      <b-badge variant="warning" class='mx-1 text-white'>
        Python <b-icon-code/>
      </b-badge>
      <b-badge variant="success" class='mx-1'>
        NodeJS <b-icon-code/>
      </b-badge>
      <b-badge variant="info" class='mx-1'>
        Java <b-icon-code/>
      </b-badge>
      </b-col>
      <b-col class='py-4'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem aut, molestias harum aspernatur quibusdam quam natus ratione nobis alias numquam velit repellendus rem molestiae tenetur odit quis aperiam architecto.
        </p>
        <hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio doloribus maxime rerum fuga fugiat ducimus deleniti? Molestias, cumque adipisci error corporis, culpa veniam numquam eaque, qui unde minima iste?
        </p>
      </b-col>
    </b-row>
    <b-row class='bg-dark text-white py-4 text-center'>
      <b-col>
        <h2>
          Hello World Again!
        </h2>

        <hr>

          <b-row>

            <UserAboutCard name='John Doe' variant='info'/>
            <UserAboutCard name='Marcus Johnson' variant='success'/>
            <UserAboutCard name='Roberto Snoberto Carlson' variant='light'/>
            <UserAboutCard name='The Obama' variant='danger'/>

          </b-row>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserAboutCard from '@/components/UserAboutCard.vue';

export default {
  name: 'About',
  components: {
    UserAboutCard
  }
};
</script>

<style scoped>

</style>
