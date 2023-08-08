<template>
<div class="q-pa-md">
 <h3>Libros</h3>
 <q-btn class="q-mb-md" color="info" v-on:click="nuevo" label="Agregar Libro" />
 <q-markup-table>
    <thead>
        <tr>
            <th>Nombre del Libro</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="book in books" :key="book.id">         
           <th>{{ book.nombre }}</th>
           <th>{{ book.autor }}</th>
           <th>${{ book.precio }}</th>
           <th>
            <q-btn @click="editar(book.id)" class="q-mr-md" color="warning" icon="edit"/>
            <q-btn @click="deletebooks(book.id)" color="negative" icon="delete"/>
           </th>
        </tr>
    </tbody>
</q-markup-table>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default defineComponent({
    name: 'Libros-Pages',
    data(){
        return{
            books: [],
        };
    },

    methods:{
        nuevo(){
            this.$router.push('/agregarlibros')
        },

        editar(){
            this.$router.push('/editarlibros')
        },

       async deletebooks(id){
          const borrar = Swal.fire({
                title: '¿Estás seguro que quieres eliminar este libro?',   
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',                  
                showCancelButton: true,                          
              });

           if(borrar){

           const bookdelete = await axios.delete('http://localhost:3000/api/eliminarlibros/' + id)
            
           }
    
           
        }
    },

    async mounted(){
      const result = await axios.get('http://localhost:3000/api/libros')
      this.books = result.data;
     }
})
</script>

<style>
h3{
    text-align: center;
}
</style>