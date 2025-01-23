<template>
  <div class="splash-screen" v-if="!isEntered">
    <div class="splash-content">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Legendary Humanity" />
      </div>
      <div class="text-content">
        <h1>You can wear virtually</h1>
        <h1>RWA legendary fashion items worth over $10,000,000- for free</h1>
     
      </div>
      <div class="description">
        LEGENDARY HUMANITY is a project that uses ultra-high precision SCAN technology to digitize valuable fashion from around the world, pass it on to the future, and consider new values with AI.
      </div>

      <div class="fashion-showcase">
        <div class="fashion-item">
          <image-compare 
            :before-image="require('@/assets/fashion1-before.jpg')"
            :after-image="require('@/assets/fashion1-after.jpg')"
          />
        </div>
        <div class="fashion-item">
          <image-compare 
            :before-image="require('@/assets/fashion2-before.jpg')"
            :after-image="require('@/assets/fashion2-after.jpg')"
          />
        </div>
      </div>

      <button @click="goToApp" class="enter-button">You can wear</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import ImageCompare from './ImageCompare.vue'

export default {
  name: 'SplashScreen',
  components: {
    ImageCompare
  },
  setup() {
    const store = useStore()
    
    const goToApp = () => {
      window.location.href = 'https://lh-star.aonmesh.ai/'
    }

    return {
      isEntered: store.state.isEntered,
      goToApp
    }
  }
}
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  overflow: hidden;
}

.splash-content {
  max-width: 800px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
}

.logo {
  flex-shrink: 0;
  text-align: left;
  margin-bottom: 32px;
  width: 100%;
}

.logo img {
  height: 96px;
  width: 600px;
  max-width: 100%;
  object-fit: contain;
  object-position: left;
}

.text-content {
  margin-bottom: 24px;
}

h1 {
  font-size: clamp(24px, 5vw, 32px);
  color: #999;
  margin: 0 0 8px 0;
  font-weight: 500;
  flex-shrink: 0;
  text-align: left;
  line-height: 1.3;
}

h2 {
  font-size: clamp(20px, 4.5vw, 28px);
  color: #333;
  margin: 0 0 4px 0;
  font-weight: 500;
  flex-shrink: 0;
  text-align: left;
  line-height: 1.3;
}

.description {
  color: #999;
  font-size: clamp(14px, 3.5vw, 18px);
  line-height: 1.6;
  margin: 16px 0 0 0;
  max-width: 600px;
  flex-shrink: 0;
  text-align: left;
}

.fashion-showcase {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 1;
  min-height: 0;
  margin: 24px 0;
  max-height: 50vh;
}

.fashion-item {
  position: relative;
  width: calc(50% - 10px);
  height: 100%;
  overflow: hidden;
}

.enter-button {
  padding: 16px 40px;
  font-size: clamp(16px, 4vw, 24px);
  background-color: #000;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-shrink: 0;
  width: 100%;
  max-width: 400px;
  margin: 24px auto 0;
}

.enter-button:hover {
  background-color: #333;
}

@media (max-width: 768px) {
  .splash-content {
    padding: 20px;
  }

  .logo img {
    height: 80px;
    width: 100%;
  }

  .fashion-showcase {
    gap: 10px;
    margin: 20px 0;
  }

  .description {
    margin: 12px 0 0 0;
  }
}

@media (max-width: 480px) {
  .splash-content {
    padding: 16px;
  }

  .logo img {
    height: 64px;
    width: 100%;
  }

  .fashion-showcase {
    gap: 8px;
    margin: 16px 0;
  }

  .enter-button {
    padding: 14px 32px;
  }
}

@media (max-height: 700px) {
  .fashion-showcase {
    max-height: 45vh;
  }
}

@media (max-height: 600px) {
  .logo img {
    height: 56px;
    width: 100%;
  }

  .description {
    margin: 8px 0 0 0;
  }

  .fashion-showcase {
    max-height: 40vh;
    margin: 12px 0;
  }
}
</style>
