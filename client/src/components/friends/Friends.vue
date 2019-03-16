<template>
  <div class="container">
    <app-add-friend></app-add-friend>
    <div class="row justify-content-center">
      <div
        v-for="(friend,index) in friends"
        :key="index"
        class="card col-xs-12 col-md-4 col-lg-3 friend-card"
      >
        <h5 class="card-header text-center">{{friend.name}}</h5>
        <img :src="friend.image" class="card-img-top">
        <div class="card-body text-center">
          <button class="btn btn-large btn-primary" @click="goToProfile(friend.username)">
            <i class="fas fa-calendar-plus"></i>
            Make a Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddFriend from "./AddFriend.vue";

export default {
  data() {
    return {
      auth: true,
      friends: [
        {
          name: "Mark Hamill",
          username: 'markhamill',
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Mike Fonseca",
          username: 'mikefonseca',
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Mitch Mitchelson",
          username: 'mitchm',
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Brian Powers",
          username: 'brianp',
          image: "https://via.placeholder.com/150"
        }
      ]
    };
  },
  components: {
    appAddFriend: AddFriend
  },
  methods: {
      goToProfile(username) {
          this.$router.push({name: 'profile', params: {username: username}})
      }
  }
};
</script>

<style>
.friend-card {
  margin-top: 10px;
}
</style>
