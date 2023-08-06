<template>
  <q-page class="flex flex-center">
    <div class="container">
    <h1 class="title">Sistema de Gestión para Biblioteca</h1>
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

.container{
  display: grid;
  align-items: center;
 
}

.title{
  font-size: 60px;
}

</style>