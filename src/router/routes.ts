import routerFiles from 'globby!/@m/**/*.router.*'

const routers: any = Object.values(routerFiles).reduce((modules: any, module: any) => {
  modules = [
    ...modules,
    ...module
  ]
  return modules
}, [])

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: '首页', icon: 'md-apps', show: true, roles: [] },
    component: () => import("./../views/Home.vue")
  },
  {
    path: "/setting",
    name: "Setting",
    meta: { title: '设置', icon: 'md-apps', show: true, roles: [] },
    component: () => import("./../views/Setting.vue")
  },
  ...routers
]

export default routes
