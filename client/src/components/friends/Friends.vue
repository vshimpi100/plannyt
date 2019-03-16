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
          <button class="btn btn-large btn-primary">
            <i class="fas fa-calendar"></i>
            Availability
          </button>
          <button class="btn btn-large btn-primary">
            <i class="fas fa-plus"></i>
            Plan
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
          name: "Mark",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Mike",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Mitch",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Mitch",
          image: "https://via.placeholder.com/150"
        },
      ]
    };
  },
  components: {
    appAddFriend: AddFriend
  }
};
</script>

<style>
.friend-card {
  margin-top: 10px;
}
</style>
