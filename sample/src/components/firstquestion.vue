<!--"var array = [1,2,3,7,8,6,9,10];
Insert numbers 4 and 5 as values at the index of 5 USING INBUILT ARRAY METHODS
Output should be [1,2,3,7,8,4,5,6,9,10];"-->


<template>
    <div>
        <h4>firstQuestion</h4>
       
        <button @click="func1()">click here</button>
    </div>
</template>
<script>


export default {
    name:"firstQuestion",
   methods:{
       func1(){
       var array = [1,2,3,7,8,6,9,10];
       array.splice(3,4,4,5,6,7,8,9)
       //array.splice(4,4,5)
       console.log(array)
    }

   }
    
}
</script>
