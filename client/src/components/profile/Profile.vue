<template>
  <div class="Profile">
      <p> {{inputString}} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      auth: true,
      friends: ['john'],
      inputString: "Hello World",
      events: []
    }
  }
}
</script>

<style>
</style>
