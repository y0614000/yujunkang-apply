<template>
  <div class="container">
    <Header title="专科获奖情况 - 于俊康" />
    <Nav />
    
    <div class="content-section">
      <!-- 模块1：获奖卡片列表 -->
      <div class="module">
        <div class="module-title">获奖情况列表</div>
        <div class="module-content">
          <div 
            v-for="award in awards" 
            :key="award.title" 
            class="award-card"
          >
            <div class="award-title">{{ award.title }}</div>
            <div class="award-info">{{ award.info }}</div>
          </div>
        </div>
      </div>

      <!-- 模块2：获奖证书图片 -->
      <div class="module">
        <div class="module-title">获奖证书扫描件</div>
        <div class="image-container">
          <img 
            :src="award1Image" 
            alt="获奖证书1" 
            @error="handleImageError1"
            ref="award1Img"
          />
          <div class="image-note" style="margin-bottom: 20px;" ref="award1Note">
            获奖证书1
          </div>
        </div>
        <div class="image-container">
          <img 
            :src="award2Image" 
            alt="获奖证书2" 
            @error="handleImageError2"
            ref="award2Img"
          />
          <div class="image-note" ref="award2Note">
            注：以上为部分获奖证书扫描件，全套证书可随时提供
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

const awards = ref([
  { title: '国家励志奖学金', info: '202X年10月 | 海南软件职业技术学院' },
  { title: '校级三好学生', info: '202X年5月 | 海南软件职业技术学院学生处' },
  { title: '校级优秀班干部', info: '202X年12月 | 海南软件职业技术学院团委' },
  { title: '海南省优秀志愿者', info: '202X年8月 | 海南省志愿者协会' },
  { title: '全国大学生XX竞赛国家级奖项', info: '202X年7月 | XX竞赛组委会 | 为学校斩获国奖' }
])

const award1Image = ref('/assets/award1.jpg')
const award2Image = ref('/assets/award2.jpg')
const award1Img = ref(null)
const award2Img = ref(null)
const award1Note = ref(null)
const award2Note = ref(null)

const handleImageError1 = () => {
  if (award1Note.value) {
    award1Note.value.textContent = '注：获奖证书1待上传（路径：/assets/award1.jpg）'
    award1Note.value.style.color = '#999'
  }
}

const handleImageError2 = () => {
  if (award2Note.value) {
    award2Note.value.textContent = '注：获奖证书2待上传（路径：/assets/award2.jpg）'
    award2Note.value.style.color = '#999'
  }
}
</script>

