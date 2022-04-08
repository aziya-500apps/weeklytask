<template>
    <div>
    <p>First</p>
    <button @click="funtime1()">Alphabatical</button>
    <button @click="funtime2()">reverse</button>
    </div>
</template>
<script>
export default{
    name:"HellO",
    data(){
        return{
            field:'name',
            
            Users:
            [{ name: '500apps', id: 1 },
            { name: 'Technologies', id: 2 },
            { name: 'Agile', id: 3 },
            { name: 'Mantra', id: 4 },
            { name: 'Clockly', id: 5 },
            { name: 'CRM', id: 6 },
            { name: '500apps', id: 7 }],
            reverse: this.Users.sort((a,b) => (a[this.field] ||"").toString().localeCompare((b[this.field] || "").toString())),

        }
    },
    
    methods:{
        funtime1() {
            console.log(this.Users.sort((a,b) => (a[this.field] ||"").toString().localeCompare((b[this.field] || "").toString())));
        },
        funtime2() {
            console.log(this.reverse.reverse())
        }
    } 
    
}
</script>
