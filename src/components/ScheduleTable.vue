<template>
  <div class="schedule-table-container">
    <div class="table-wrapper">
      <table class="schedule-table">
        <thead>
          <tr>
            <th class="time-col">时间</th>
            <th v-for="day in weekDays" :key="day">{{ getDayName(day) }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(timeSlot, index) in timeSlots" :key="index">
            <td class="time-col">{{ timeSlot }}</td>
            <td 
              v-for="(day, dayIndex) in weekDays" 
              :key="dayIndex"
              @click="handleCourseClick(scheduleData[dayIndex]?.[index])"
              :class="{ 
                'has-course': scheduleData[dayIndex]?.[index], 
                'clickable': scheduleData[dayIndex]?.[index] && scheduleData[dayIndex]?.[index].transcript,
                'no-transcript': scheduleData[dayIndex]?.[index] && !scheduleData[dayIndex]?.[index].transcript
              }"
            >
              <div v-if="scheduleData[dayIndex]?.[index]" class="course-cell">
                <div class="course-name">{{ scheduleData[dayIndex][index].name }}</div>
                <div class="course-teacher">{{ scheduleData[dayIndex][index].teacher }}</div>
                <div class="course-room">{{ scheduleData[dayIndex][index].room }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  scheduleData: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['course-click'])

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const timeSlots = ['1-2节', '3-4节', '5-6节', '7-8节', '9-10节', '11-12节']

const getDayName = (day) => {
  const dayMap = {
    'Mon': '星期一',
    'Tue': '星期二',
    'Wed': '星期三',
    'Thu': '星期四',
    'Fri': '星期五',
    'Sat': '星期六',
    'Sun': '星期日'
  }
  return dayMap[day] || day
}

const handleCourseClick = (course) => {
  if (course) {
    emit('course-click', course)
  }
}
</script>

<style scoped>
.schedule-table-container {
  margin-bottom: 20px;
}

.table-wrapper {
  overflow-x: auto;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 800px;
  table-layout: fixed;
}

.schedule-table th {
  background-color: #0066cc;
  color: #fff;
  padding: 12px 8px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #0052a3;
}

.schedule-table .time-col {
  background-color: #0066cc;
  color: #fff;
  font-weight: bold;
  width: 10%;
  text-align: center;
}

.schedule-table th:not(.time-col) {
  width: 12.86%; /* 100% / 7 days ≈ 12.86% */
}

.schedule-table td {
  padding: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
  vertical-align: top;
  min-height: 60px;
  height: 80px;
  position: relative;
  width: 12.86%; /* 与表头列宽保持一致 */
}

.schedule-table td.time-col {
  width: 10%; /* 与表头时间列宽保持一致 */
}

.schedule-table td.has-course {
  background-color: #f0f7ff;
  cursor: pointer;
  transition: all 0.3s;
}

.schedule-table td.has-course.clickable:hover {
  background-color: #e0f0ff;
  box-shadow: 0 2px 4px rgba(0, 102, 204, 0.2);
  transform: scale(1.02);
}

.schedule-table td.has-course.no-transcript {
  cursor: not-allowed;
  opacity: 0.7;
}

.schedule-table td.has-course.no-transcript:hover {
  background-color: #f0f7ff;
  transform: none;
}

.course-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 4px;
}

.course-name {
  font-weight: bold;
  color: #0066cc;
  font-size: 13px;
  margin-bottom: 4px;
  line-height: 1.3;
}

.course-teacher {
  font-size: 11px;
  color: #666;
  margin-bottom: 2px;
}

.course-room {
  font-size: 11px;
  color: #999;
}

@media (max-width: 768px) {
  .schedule-table {
    font-size: 12px;
  }
  
  .schedule-table th,
  .schedule-table td {
    padding: 6px 4px;
  }
  
  .course-name {
    font-size: 11px;
  }
  
  .course-teacher,
  .course-room {
    font-size: 10px;
  }
}
</style>

