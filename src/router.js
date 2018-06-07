import Vue from 'vue'
import Router from 'vue-router'

// import about from "./views/About.vue" 
// import home from "./views/Home.vue"
// import date from "./views/Date.vue"
// import list from "./views/List.vue"
import login from "./views/login.vue"
import home from "./views/Home.vue"
import welcome from "./components/HelloWorld.vue"
import user from "./components/user.vue"
Vue.use(Router)

export default new Router({
  routes:[
    // {name:"about",path:'/about',component:about},
    // {name:"home",path:'/',component:home},
    // {name:"date",path:'/date',component:date},
    // {name:"list",path:'/list',component:list}
    {name:"lgin",path:'/login',component:login},
    {
      name:"home",
      path:'/home',
      component:home,
      redirect:'/home/welcome',
      children:[
        { name:"welcome",path:'welcome',component:welcome},
        {name:"user",path:'user',component:user}  
      ]
    }
  ]
})
