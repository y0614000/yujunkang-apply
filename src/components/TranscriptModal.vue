<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ courseName }}</h3>
          <button class="close-btn" @click="close">×</button>
        </div>
        <div class="modal-body">
          <div class="image-container" :class="{ 'certificate-image': isCertificate }">
            <img 
              :src="transcriptImage" 
              :alt="`${courseName}成绩单`"
              @error="handleImageError"
            />
            <div v-if="imageError" class="error-message">
              成绩单图片待上传（路径：{{ transcriptImage }}）
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  courseName: {
    type: String,
    default: ''
  },
  transcriptImage: {
    type: String,
    default: ''
  },
  isCertificate: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:visible', 'close'])

const imageError = ref(false)

// 控制页面滚动
const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = '0px' // 防止滚动条消失导致的布局偏移
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

watch(() => props.visible, (newVal) => {
  if (newVal) {
    imageError.value = false
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
})

// 组件卸载时确保解锁滚动
onUnmounted(() => {
  unlockBodyScroll()
})

const close = () => {
  emit('update:visible', false)
  emit('close')
}

const handleOverlayClick = () => {
  close()
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.modal-header h3 {
  font-size: 20px;
  color: #0066cc;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  transition: all 0.3s;
}

.close-btn:hover {
  color: #0066cc;
  transform: rotate(90deg);
}

.modal-body {
  padding: 20px;
}

.image-container {
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.image-container.certificate-image img {
  max-width: 40%;
  height: auto;
}

.error-message {
  padding: 20px;
  color: #999;
  font-style: italic;
}

/* 过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 15px;
  }
  
  .modal-header h3 {
    font-size: 18px;
  }
  
  .modal-body {
    padding: 15px;
  }
}
</style>

