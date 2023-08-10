<template>
<q-page class="q-pa-md">
<h4 class="flex flex-center">Agregar Nuevo Libro</h4>
<q-form @submit="storeBook">
<q-input 
filled
v-model="nombre"
label="Nombre del libro"
class="q-mb-md"
/>
<q-input
filled
v-model="autor"
label="Autor del libro"
class="q-mb-md"
/>
<q-input
filled
type="number"
v-model="precio"
label="Precio"
class="q-mb-md"
/>
<q-btn color="info" type="submit" label="Guardar Libro"></q-btn>
</q-form>
</q-page>
</template>


<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default defineComponent({
    name: 'Crear-Books',
    
    methods:{

    alerta(){
      Swal.fire(
       'Libro Agregado Exitosamente',
       'Registrado',
       'success'
      )
    },
    async storeBook(){
      const book = await axios.post(
        'http://localhost:3000/api/agregarlibros',

        {
            nombre: this.nombre,
            autor: this.autor,
            precio: this.precio
        },

        this.alerta()
      )
      
    }
  }
})
</script>