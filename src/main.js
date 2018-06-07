import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from "./router"
import elementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import store from "./store"

Vue.config.productionTip = false


// Vue.use(VueRouter)
Vue.use(elementUI)
// const router = new VueRouter({
//   routes:[
//     {name:"about",path:'/about',component:about},
//     {name:"home",path:'/',component:home},
//     {name:"date",path:'/date',component:date},
//     {name:"list",path:'/list',component:list}    
//   ]
// })

// 下面代码是路由首位，当检测到token时允许路由跳转，如果没有检测到token
// 那么，让其强行跳转到login页面
router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("mytoken")
  if(token){
    next()
  }else {
    if(to.path=="/login"){
      next()
    }else{
      next({path:'/login'})
    }
  }
})

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
})
