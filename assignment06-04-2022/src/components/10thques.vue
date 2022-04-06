<template>
    <div>
        <button @click="handle()">trycatch</button>

    </div>
</template>

<script>
export default{
    name:"TryC",
    methods:{
        handle(){
            try{
             var count = count * 5;
             console.log("printing count",count)
             }
             catch{
                 console.log("printing count",count)

             }
            }
    },
    }
</script>

