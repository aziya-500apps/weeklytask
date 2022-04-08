import Vue from "vue"
import Router from "vue-router"
import SeconD from "../components/2ndques"
import FourTh from "../components/4thques"
import ThrEe from "../components/3rdques"
import FirsT from "../components/1stques"
import ThreeTry from "../components/3rdquestry"
import ThreeTry1 from "../components/33ques"
import Five from "../components/5thques"


Vue.use(Router)
const routes=[
    
    {path:"/second",name:"SeconD",component:SeconD},
    {path:"/four",name:"FourTh",component:FourTh},
    {path:"/three",name:"ThrEe",component:ThrEe},
    {path:"/first",name:"FirsT",component:FirsT},
    {path:"/threetry",name:"ThreeTry",component:ThreeTry},
    {path:"/threetry1",name:"ThreeTry1",component:ThreeTry1},
    {path:"/five",name:"Five",component:Five},
   
    
]
let router =new Router({routes})
export default router


