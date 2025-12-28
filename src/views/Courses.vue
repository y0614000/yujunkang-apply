<template>
  <div class="container">
    <Header title="已学课程证明" />
    <Nav />
    
    <div class="content-section">
      <!-- 模块1：课程表 -->
      <div class="module">
        <div class="module-title">2025-2026学年第二学期课程表</div>
        <div class="module-content">
          <div class="schedule-reference" @click="showScheduleOriginal">
            <p>注：参考上2024届（海师）计算机科学与技术的课程表，<span class="click-highlight">点击</span>可查看课程表原件。</p>
          </div>
          <ScheduleTable 
            :schedule-data="scheduleData" 
            @course-click="handleCourseClick"
          />
          <div class="schedule-note">
            <p>注：点击课程名称可查看对应成绩单</p>
          </div>
        </div>
      </div>

      <!-- 模块2：2026-2027学年第一学期课程表 -->
      <div class="module">
        <div class="module-title">2026-2027学年第一学期课程表</div>
        <div class="module-content">
          <div class="schedule-reference" @click="showScheduleOriginal2">
            <p>注：参考上2024届（海师）计算机科学与技术的课程表，<span class="click-highlight">点击</span>可查看课程表原件。</p>
          </div>
          <ScheduleTable 
            :schedule-data="scheduleData2" 
            @course-click="handleCourseClick"
          />
          <div class="schedule-note">
            <p>注：点击课程名称可查看对应成绩单</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <!-- 成绩单弹窗 -->
    <TranscriptModal
      v-model:visible="modalVisible"
      :course-name="selectedCourseName"
      :transcript-image="selectedTranscriptImage"
    />

    <!-- 课程表原件弹窗1 -->
    <TranscriptModal
      v-model:visible="scheduleModalVisible"
      course-name="2024届（海师）计算机科学与技术课程表原件"
      :transcript-image="yuan1Image"
    />

    <!-- 课程表原件弹窗2 -->
    <TranscriptModal
      v-model:visible="scheduleModalVisible2"
      course-name="2026-2027学年第一学期课程表原件"
      :transcript-image="yuan2Image"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import ScheduleTable from '../components/ScheduleTable.vue'
import TranscriptModal from '../components/TranscriptModal.vue'
import dxyyImage from '../assets/images/dxyy.png'
import cxsjImage from '../assets/images/cxsj.png'
import jsjwlImage from '../assets/images/jsjwl.png'
import sjjgImage from '../assets/images/sjjg.png'
import wzkfImage from '../assets/images/wzkf.png'
import xsyzcImage from '../assets/images/xsyzc.png'
import yuan1Image from '../assets/images/yuan1.jpg'
import yuan2Image from '../assets/images/yuan2.jpg'
import czxxImage from '../assets/images/czxx.png'
import rjcsImage from '../assets/images/rjcs.png'
import sjkImage from '../assets/images/sjk.png'

// 课程表数据：7天（周一到周日），每天6个时间段
// scheduleData[dayIndex][timeIndex] = course
const scheduleData = ref([
  // 周一
  [
    { name: '★大学英语(二)', teacher: '蒋秀娟', room: '教206', transcript: dxyyImage },
    { name: '★数据结构', teacher: '王贞', room: '综504', transcript: sjjgImage },
    { name: '★数据结构', teacher: '王贞', room: '综504', transcript: sjjgImage },
    null,
    null,
    null
  ],
  // 周二
  [
    { name: '★高级语言程序设计', teacher: '李迎杰', room: '综504', transcript: cxsjImage },
    { name: '★高级语言程序设计', teacher: '李迎杰', room: '综504', transcript: cxsjImage },
    null,
    { name: '●形势与政策2', teacher: '符冠花', room: '综401', transcript: xsyzcImage },
    null,
    null
  ],
  // 周三
  [
    { name: '★计算机组成原理', teacher: '戴祖国', room: '综604', transcript: jsjwlImage },
    { name: '★计算机组成原理', teacher: '戴祖国', room: '综604', transcript: jsjwlImage },
    null,
    null,
    { name: '★计算机网络', teacher: '刘其琛(团队)', room: '综504', transcript: jsjwlImage },
    { name: '★计算机网络', teacher: '刘其琛(团队)', room: '综504', transcript: jsjwlImage }
  ],
  // 周四
  [
    { name: '●动态网站开发技术', teacher: '王霞', room: '综604', transcript: wzkfImage },
    { name: '●动态网站开发技术', teacher: '王霞', room: '综604', transcript: wzkfImage },
    null,
    null,
    null,
    null
  ],
  // 周五
  [
    { name: '★大学英语(二)', teacher: '蒋秀娟', room: '教206', transcript: dxyyImage },
    null,
    null,
    null,
    null,
    null
  ],
  // 周六
  [null, null, null, null, null, null],
  // 周日
  [null, null, null, null, null, null]
])

// 2026-2027学年第一学期课程表数据
const scheduleData2 = ref([
  // 周一
  [
    { name: '★操作系统', teacher: '张健', room: '教308', transcript: czxxImage },
    null,
    { name: '●形势与政策3', teacher: '贺东建', room: '综202', transcript: xsyzcImage },
    null,
    null,
    null
  ],
  // 周二
  [
    { name: '★操作系统', teacher: '张健', room: '综604', transcript: czxxImage },
    { name: '★软件测试技术', teacher: '柴荣东', room: '综704', transcript: rjcsImage },
    null,
    null,
    { name: '★网络安全与管理', teacher: '符天', room: '综504', transcript: null },
    null
  ],
  // 周三
  [null, null, null, null, null, null],
  // 周四
  [
    null,
    null,
    { name: '★软件工程', teacher: '柴荣东', room: '综504', transcript: rjcsImage },
    { name: '★软件工程', teacher: '柴荣东', room: '综504', transcript: rjcsImage },
    null,
    null
  ],
  // 周五
  [
    { name: '★数据库原理', teacher: '董广巧', room: '综504', transcript: sjkImage },
    { name: '★数据库原理', teacher: '董广巧', room: '综504', transcript: sjkImage },
    { name: '★软件测试技术', teacher: '柴荣东', room: '综704', transcript: rjcsImage },
    null,
    null,
    null
  ],
  // 周六
  [null, null, null, null, null, null],
  // 周日
  [null, null, null, null, null, null]
])

const modalVisible = ref(false)
const selectedCourseName = ref('')
const selectedTranscriptImage = ref('')
const scheduleModalVisible = ref(false)
const scheduleModalVisible2 = ref(false)

const transcriptImage = ref('/assets/transcript.jpg')
const transcriptImg = ref(null)
const transcriptNote = ref(null)

const handleCourseClick = (course) => {
  if (course && course.transcript) {
    selectedCourseName.value = course.name
    selectedTranscriptImage.value = course.transcript
    modalVisible.value = true
  }
}

const handleImageError = () => {
  if (transcriptImg.value) {
    transcriptImg.value.style.display = 'none'
  }
  if (transcriptNote.value) {
    transcriptNote.value.textContent = '注：成绩单图片待上传（路径：/assets/transcript.jpg）'
    transcriptNote.value.style.color = '#999'
  }
}

const showScheduleOriginal = () => {
  scheduleModalVisible.value = true
}

const showScheduleOriginal2 = () => {
  scheduleModalVisible2.value = true
}
</script>

<style scoped>
.schedule-note {
  margin-top: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.schedule-note p {
  margin: 0;
}

.schedule-reference {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f7ff;
  /* border-left: 3px solid #0066cc; */
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.schedule-reference:hover {
  background-color: #e0f0ff;
}

.schedule-reference p {
  margin: 0;
}

.click-highlight {
  color: #0066cc;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>

