//
import Vue from "vue"
import Router from "vue-router"

import HelloWorld from "../components/HelloWorld"
import FirstQues from "../components/firstquestion.vue"
import SecondQues from "../components/secondquestion.vue"
import ThirdQues from "../components/thirdquestion.vue"
import FifthQues from "../components/fifthquestion.vue"
import SixthQues from "../components/sixthquestion.vue"
import SeventhQues from "../components/seventhquestion.vue"
import EightQues from "../components/eightquestion.vue"
import TenthQues from "../components/tenthquestion.vue"

Vue.use(Router)
const routes=[
    {path:"/",name:"Home",component:HelloWorld},
    {path:"/first",name:"First",component:FirstQues},
    {path:"/second",name:"Second",component:SecondQues},
    {path:"/third",name:"Third",component:ThirdQues},
    {path:"/fifth",name:"Fifth",component:FifthQues},
    {path:"/sixth",name:"Sixth",component:SixthQues},
    {path:"/seventh",name:"Seventh",component:SeventhQues},
    {path:"/eight",name:"Eight",component:EightQues},
   {path:"/tenth",name:"Tenth",component:TenthQues}
]
let router =new Router({routes})
export default router
