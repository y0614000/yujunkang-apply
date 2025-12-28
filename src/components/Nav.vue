<template>
  <nav class="nav">
    <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
      申请原因
    </router-link>
    <router-link to="/courses" class="nav-item" :class="{ active: $route.path === '/courses' }">
      已学课程证明
    </router-link>
    <!-- <router-link to="/awards" class="nav-item" :class="{ active: $route.path === '/awards' }">
      专科获奖情况
    </router-link> -->
  </nav>
</template>

<script setup>
// 导航组件
</script>

