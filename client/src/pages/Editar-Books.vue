<template>
  <q-page class="q-pa-md">
    <h4 class="flex flex-center">Editar Libros</h4>
    <q-form @submit="actualizarLibro">
      <q-input
        filled
        label="Nombre del libro"
        v-model="nombreLibro"
        class="q-mb-md"
      />
      <q-input
        filled
        label="Autor del libro"
        v-model="autorLibro"
        class="q-mb-md"
      />
      <q-input
        filled
        type="number"
        label="Precio"
        v-model="precioLibro"
        class="q-mb-md"
      />
      <q-btn type="submit" color="info" label="Actualizar Libro" />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'EditarLibros',
  data() {
    return {
      nombreLibro: '',
      autorLibro: '',
      precioLibro: '',
    };
  },
  methods: {

  	alerta(){
      Swal.fire(
      'Libro Actualizado Exitosamente',
      'Actualizado',
      'success'   
      )
  	},

    async actualizarLibro() {
      const idLibro = this.$route.params.id
      const datosActualizados = {
        nombre: this.nombreLibro,
        autor: this.autorLibro,
        precio: this.precioLibro,
      };
        
        this.alerta()
        this.$router.push('/libros')
        await axios.put(`http://localhost:3000/api/actualizarlibros/${idLibro}`, datosActualizados)
       
      
    },
  },
});
</script>


