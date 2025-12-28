<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <!-- <div class="subtitle">海南软件职业技术学院 & 海南师范大学 联合培养 | 2025届 计科 201</div> -->
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

