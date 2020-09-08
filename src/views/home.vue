<template>
  <div class="home" @click="toLogin">home</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toLogin() {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>
