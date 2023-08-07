<template>
  <q-page class="flex flex-center">
    <div class="container">
    <h1 class="title">Bienvenido</h1>
    <q-img 
      src="../assets/books.jpg"
    />
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>


<style>
.title{
  font-size: 60px;
}
</style>