<template>
  <splash-screen />
  <div class="app-content" v-if="isEntered">
    <h1>主应用内容</h1>
    <p>这里是您的应用主要内容</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SplashScreen from './components/SplashScreen.vue'

export default {
  name: 'App',
  components: {
    SplashScreen
  },
  setup() {
    const store = useStore()
    const isEntered = computed(() => store.state.isEntered)

    return {
      isEntered
    }
  }
}
</script>

<style>
.app-content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
