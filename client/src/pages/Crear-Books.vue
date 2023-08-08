<template>
<q-page class="q-pa-md">
<h4 class="flex flex-center">Agregar Nuevo Libro</h4>
<q-input 
filled
v-model="nombre"
label="Nombre del libro"
class="q-mb-md"
lazy-rules
:rules="[ val => val && val.length > 0 || 'Este Campo es Obligatorio']"
/>
<q-input
filled
v-model="autor"
label="Autor del libro"
class="q-mb-md"
lazy-rules
:rules="[ val => val && val.length > 0 || 'Este Campo es Obligatorio']"
/>
<q-input
filled
type="number"
v-model="precio"
label="Precio"
class="q-mb-md"
lazy-rules
:rules="[ val => val && val.length > 0 || 'Este Campo es Obligatorio']"
/>
<q-btn color="info" @click="storeBook" label="Guardar Libro"></q-btn>
</q-page>
</template>


<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Crear-Books',
    
    methods:{
    async storeBook(){
      const book = await axios.post(
        'http://localhost:3000/api/agregarlibros',

        {
            nombre: this.nombre,
            autor: this.autor,
            precio: this.precio
        }
      )
    }
    }
})
</script>