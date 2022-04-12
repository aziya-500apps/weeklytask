import Vue from "vue"
import Router from "vue-router"
import First from "../components/1stques"
import First1 from "../components/dummy"
import Second from "../components/2ndques"


Vue.use(Router)
const routes=[
    
   
   {path:"/first",name:"First",component:First},
   {path:"/first1",name:"First1",component:First1},
   {path:"/second",name:"Second",component:Second},


]
let router =new Router({routes})
export default router