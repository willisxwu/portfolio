const modules = import.meta.glob('../pages/**/*.vue')

const routes = Object.keys(modules).map((path) => {
  const name = path.split('/').pop()?.replace('.vue', '')
  return {
    path: `/${name?.toLowerCase()}`,
    component: modules[path],
  }
})

routes.push(
  {
    path: '/',
    component: modules['../pages/index.vue'],
  },
  {
    path: '/works',
    component: modules['../pages/works/index.vue'],
  },)

export default routes
