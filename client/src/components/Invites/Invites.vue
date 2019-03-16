<template>
  <div class="container">
    <app-accept-invite></app-accept-invite>
    <div class="row justify-content-center">
      <div
        v-for="(invite,index) in invites"
        :key="index"
        class="card col-xs-12 col-md-4 col-lg-3 invite-card"
      >
        <h5 class="card-header text-center">{{invite.creator}}</h5>
        <h5 class="card-header text-center">{{invite.title}}</h5>
        <img :src="invite.image" class="card-img-top">
        <div class="card-body text-center">
          <button class="btn btn-large btn-primary" @click="acceptInvite(invite.id)">
          <i class="fas fa-calendar-check"></i>Accept
          </button>
          <button class="btn btn-large btn-danger" @click="declineInvite(invite.id)">    
            <i class="fas fa-calendar-minus"></i>
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      auth: true,
      invites: [
        {
          creator: "Mark Hamill",
          title: "Braves Game",
          username: 'markhamill',
          image: "https://via.placeholder.com/150"
        },
      ]
    };
  },
  methods: {
      acceptInvite(id) {
          this.$router.put({name: 'e', params: {id: id}})
      },
      declineInvite(id) {
          this.$router.delete({name: 'e', params: {id: id}})
      }
  }
};
</script>

<style>
.invite-card {
  margin-top: 10px;
}
</style>
