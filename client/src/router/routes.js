
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: ()=> import('pages/IndexPage.vue') },
      { path: 'libros', name: 'libros', component: ()=> import('pages/Libros-Page.vue')},
      { path: 'agregarlibros', name: 'agregarlibros', component: ()=> import('pages/Crear-Books.vue')},
      { path: 'editarlibros', name: 'editarlibros', component: ()=> import('pages/Editar-Books.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
