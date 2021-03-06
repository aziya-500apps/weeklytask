import Vue from "vue"
import Router from "vue-router"
import ThirD from "../components/3rdques.vue"
import SeveN from "../components/7thques.vue"
import TenTh from "../components/10thques.vue"
import EighTh from "../components/8thques.vue"
import FifTh from "../components/5thques.vue"
import NineTh from "../components/9thques.vue"
import FirstTried from "../components/firstquestried.vue"
import FourTh from "../components/4thques.vue"
import TrieD from "../components/tried4th.vue"
import QueS from "../components/question.vue"


Vue.use(Router)
const routes=[
    
    {path:"/seven",name:"SeveNn",component:SeveN},
    {path:"/ten",name:"TeNth",component:TenTh},
    {path:"/eight",name:"EigTh",component:EighTh},
    {path:"/five",name:"FifTh",component:FifTh},
    {path:"/three",name:"ThirD",component:ThirD},
    {path:"/nine",name:"NineTh",component:NineTh},
    {path:"/firsttried",name:"FirstTried ",component:FirstTried},
    {path:"/four",name:"FourTh",component:FourTh},
    {path:"/tried4",name:"TrieDh",component:TrieD},
    {path:"/queS",name:"QueS",component:QueS},

]
let router =new Router({routes})
export default router