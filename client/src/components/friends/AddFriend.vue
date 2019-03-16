<template>
  <div>
    <div class="row addFriend" v-if="addActive">
      <input
        placeholder="username"
        name="friend"
        type="text"
        v-model="friend"
        class="col-xs-12 col-md-5 offset-md-3"
      >
      <button @click="add()" class="btn btn-primary col-xs-12 col-md-1 add">Add</button>
    </div>
    <div class="row addFriend" v-else>
      <button
        class="btn btn-primary btn-large col-xs-12 col-md-6 offset-md-3"
        @click="addActive =true"
      >
        <i class="fas fa-user-plus"></i>
        Add Friend
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friend: "",
      addActive: false
    };
  },
  methods: {
    add() {
      this.addActive = false;
    }
  }
};
</script>

<style>
.addFriend {
  margin: 10px;
}
.add {
  margin-left: 10px;
}
</style>
