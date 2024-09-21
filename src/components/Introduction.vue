<script setup>

</script>

<template>
    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4 ">
      <div class="flex content1 justify-center  items-center">
       <div class="p-2">
         <h1 class="text-4xl text-dark-200">Hi, I am <br> Alex Barasa</h1>
         <p class=" text-xl w-[100%]">I'm Cloud and Network security analyst with a passion for Securing Networks and intermediate web applications frontend. I have experience working with Eclectics Internation Limited As a penetration tester during my internship period i do deliver high-quality Security solutions.</p>
         <button class="p-2 btn bg-blue-400 my-4">Hire Me</button>
       </div>
      </div>
      <div class="flex content2 justify-center items-center">
        <img src="/icon.jpg" class="object-fit" alt="">
      </div>
    </div>

</template>

<style scoped>
.btn{
 transition: ease-in-out 1s;
}
.btn:hover{
  background: orange;
  font-size: 22px;
  text-transform: uppercase;
}
@media screen and (max-width: 600px) {
  .content1{
    object-fit: cover;
    background-size: cover;
  }
  .content2{
    display: none;
  }
}
</style>