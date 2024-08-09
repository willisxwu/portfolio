const modules = import.meta.glob('../pages/**/*.vue')

const routes = Object.keys(modules).map((path) => {
  const routePath = path
    .replace('../pages', '')
    .replace('.vue', '')
    .toLowerCase()
    .replace(/\/index$/, '/')

  return {
    path: routePath === '/index' ? '/' : routePath,
    component: modules[path],
  }
})

export default routes
