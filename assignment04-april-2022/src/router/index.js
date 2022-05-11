//
import Vue from "vue"
import Router from "vue-router"
import Btable from "../components/b-table.vue"
import Watch from "../components/watch.vue"


Vue.use(Router)
const routes=[
    
   {path:"/btable",name:"B-table",component:Btable},
   {path:"/watch",name:"Watch",component:Watch}
]
let router =new Router({routes})
export default router
