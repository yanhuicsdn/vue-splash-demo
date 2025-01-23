<template>
  <div class="image-compare" ref="container" @mousemove="handleMove" @touchmove="handleTouchMove">
    <img :src="afterImage" alt="After" class="image" />
    <div class="compare-overlay" :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }">
      <img :src="beforeImage" alt="Before" class="image" />
    </div>
    <div class="slider" :style="{ left: position + '%' }">
      <div class="slider-line"></div>
      <div class="slider-button">
        <span class="slider-arrow">⟷</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ImageCompare',
  props: {
    beforeImage: {
      type: String,
      required: true
    },
    afterImage: {
      type: String,
      required: true
    }
  },
  setup() {
    const container = ref(null)
    const position = ref(50)

    const calculatePosition = (e) => {
      if (!container.value) return

      const rect = container.value.getBoundingClientRect()
      const x = e.clientX - rect.left
      const containerWidth = rect.width

      let newPosition = (x / containerWidth) * 100
      newPosition = Math.min(100, Math.max(0, newPosition))
      position.value = newPosition
    }

    const handleMove = (e) => {
      if (e.buttons !== 1) return
      e.preventDefault()
      calculatePosition(e)
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      calculatePosition(e.touches[0])
    }

    return {
      container,
      position,
      handleMove,
      handleTouchMove
    }
  }
}
</script>

<style scoped>
.image-compare {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  background-color: #f5f5f5;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.compare-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: clip-path;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  transform: translateX(-50%);
  cursor: ew-resize;
  display: flex;
  justify-content: center;
  will-change: left;
  touch-action: none;
}

.slider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.slider-arrow {
  color: #333;
  font-size: 24px;
}

@media (max-width: 768px) {
  .slider {
    width: 32px;
  }

  .slider-button {
    width: 32px;
    height: 32px;
  }

  .slider-arrow {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .slider {
    width: 28px;
  }

  .slider-button {
    width: 28px;
    height: 28px;
  }

  .slider-arrow {
    font-size: 18px;
  }
}
</style>
