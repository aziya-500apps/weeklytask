<template>
<div>
    <p id="demo"></p>
    <button @click="func1()">Click here </button>
    <button @click="func2()">Click here2 </button>
    <button @click="func3()">Click here3 </button>
</div>
</template>
<script>
export default{
    name:"SetTime",
    data(){
        return{
            today:new Date()
        }
    },
    methods:{
        func1(){
            setTimeout(() => { console.log(this.today)},5000)
            console.log("Statement2")
    },
         func2(){
             const element=document.getElementById("demo")
             setInterval(function(){element.innerHTML+="hello"},5000);
         },
         func3(){
             setInterval(()=>{console.log(this.today)},2000)
         }

    }

}

</script>
