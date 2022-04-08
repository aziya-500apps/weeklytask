<template>
    <div>
        <form name="form1">
            <label for="" name="num1">1st Number:</label>
            <input type="text" name="num1" id="id1"><br>
            <label for="" name="num2">2nd Number:</label>
            <input type="text" name="num2" id="id2"><br>
            <button @click="mul()">Multiply</button>
            <button @click="div()">Divide</button>
           

            <h5>The Result Is:</h5><p id="id3"></p>
        </form>
    </div>
</template>
<script>
export default{
    name:"QueS2",
    data(){
    return{
        z:" "

    }
    },
    methods:{
        mul(){
            var x=document.getElementById("id1").value;
            var y=document.getElementById("id2").value;
            var z=Number(x*y);
            document.getElementById("id3").innerHTML=z;
            console.log(z);
            return z
        },
        div(){
            var x=document.getElementById("id1").value;
            var y=document.getElementById("id2").value;
            var z=Number(x/y);
            document.getElementById("id3").innerHTML=z;
            console.log(z);
            return z
    }
    }


    
}
</script>
