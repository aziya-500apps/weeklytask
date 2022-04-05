<!--"tTke 2 input fields with First name and last name,
If user enters the data, on click of a button
display the full name using COMPUTED Property.
Eg: first_name = ""500apps"" , last_name = ""infinity""
Output : full_name : ""500apps_infinity"""-->

<template>
    <div>
        <h4>10th question</h4>
        <p>{{full_name}}</p>
        <button @click="fun1()">Button</button>
    </div>
</template>
<script>
export default {
    name: "questionA",
 
    data()
    {
        return{
        name1:"",
        first_name:"500apps",
        last_name:"infinity",
        full_name:""
    }
    },
    
    methods:{
        fun1(){
        this.full_name=this.first_name+"_"+this.last_name
           alert(this.full_name)
           console.log(this.full_name)
           
           


        }
    
    }
}
</script>
