import Vue from "vue"
import Router from "vue-router"
import First from "../components/1stques"
import First1 from "../components/dummy"
import FirstDummy from "../components/1stdummy"
import Second from "../components/2ndques"
import SecondFilter from "../components/filter"
import SecondPagination from "../components/pagination"
import Secondkanban from "../components/kanban"


import Firstnew from "../components/ques1new"
import Firstnew1 from "../components/ques1newdummy"




Vue.use(Router)
const routes=[
    
   
   {path:"/first",name:"First",component:First},
   {path:"/first1",name:"First1",component:First1},
   {path:"/first11",name:"FirstDummy",component:FirstDummy},
   {path:"/second",name:"Second",component:Second},
   {path:"/2filter",name:"SecondFilter",component:SecondFilter},
   {path:"/2pag",name:"SecondPagination",component:SecondPagination},
   {path:"/2kan",name:"Secondkanban",component:Secondkanban},

  
   {path:"/1new",name:"Firstnew",component:Firstnew},
   {path:"/1",name:"Firstnew1",component:Firstnew1},

]
let router =new Router({routes})
export default router