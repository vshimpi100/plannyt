<template>
  <div>
    <app-add-friend></app-add-friend>
    <div v-for="(friend,index) in friends">
        
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

        }
      ]
    };
  },
  components: {
    appAddFriend: AddFriend
  }
};
</script>

<style>
</style>
