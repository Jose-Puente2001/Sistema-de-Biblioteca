<template>
 <h1>Libros</h1>
<table>
    <thead>
        <tr>
            <th>Nombre del Libro</th>
            <th>Autor</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="book in books" :key="book.id">         
           <th>{{ book.nombre }}</th>
           <th>{{ book.autor }}</th>
           <th>{{ book.precio }}</th>
        </tr>
    </tbody>
</table>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Libros-Pages',
    data(){
        return{
            books: [],
        };
    },

    async mounted(){
        const response = await fetch('http://localhost:3000/api/libros')
        const datos = await response.json()
        console.log(datos)
        this.books = datos
    }
})
</script>

<style>
h1{
    text-align: center;
}

table{
    width: 100%;
}

th, td {
   width: 25%;
   text-align: center;
}
</style>