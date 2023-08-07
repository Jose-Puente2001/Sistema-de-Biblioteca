<template>
<q-page>
<h4>Agregar Nuevo Libro</h4>
<input type="text" v-model="nombre" placeholder="nombre del libro"/>
<input type="text" v-model="autor"  placeholder="autor del libro"/>
<input type="text" v-model="precio" placeholder="precio"/>
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