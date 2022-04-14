import Vue from "vue"
import Router from "vue-router"



import Firstnew from "../components/1stques"
import Firstnew1 from "../components/1stquesdummy"




Vue.use(Router)
const routes=[
    
   
   

  
   {path:"/1new",name:"Firstnew",component:Firstnew},
   {path:"/1",name:"Firstnew1",component:Firstnew1},

]
let router =new Router({routes})
export default router