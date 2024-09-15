<!-- src/pages/Home.vue -->
<template>
<div class="bg-gray-200 ">
    <Header />
    <Introduction />
  <hr class="dark">
    <AboutMe />
  <hr class="dark">
  <Projects />
  </div>
  <div class="media">
    <ul class="list-unstyled d-flex justify-content-around  fs-2 media">
      <li>
        <i class="bi bi-facebook"></i>
      </li>
      <li>
        <i class="bi bi-twitter"></i>
      </li>
      <li>
        <i class="bi bi-instagram"></i>
      </li>

    </ul>

  </div>
</template>

<script setup>
import Introduction from "../components/Introduction.vue";
import Header from "@/components/Header.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
</script>
