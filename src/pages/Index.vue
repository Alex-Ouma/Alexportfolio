<!-- src/pages/Home.vue -->
<template>
<div class="">
    <Header />
    <Introduction />
    <AboutMe />
  <Projects />
  </div>
</template>

<script setup>
import Introduction from "../components/Introduction.vue";
import Header from "@/components/Header.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
</script>
