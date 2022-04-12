
<!--Print the "details" in below data
[{ "category1": [{
"name": "cat1",
"description": "it is cat1",
"details": ["name", "category", "age", "contact"]
}]
},
{
"category2": [{
"name": "cat2",
"description": "it is cat2",
"details": ["name2", "category2", "age2", "contact2"]
}]
}
]
Eg Output:
name, category, age, contact
name2, category2, age2, contact2-->

<template>
    <div>
        <h4>third question</h4>
        <button @click="fun1()">click here</button>


    </div>
</template>
<script>
export default{
    name:"thirdQues",

    methods:{
        fun1(){
            this.arrobj=[{"category1": [{"name": "cat1","description": "it is cat1",
        "details": ["name", "category", "age", "contact"]
                                                         }]
                                                             },
          {
          "category2": [{
                         "name": "cat2",
                            "description": "it is cat2",
                                  "details": ["name2", "category2", "age2", "contact2"]}]}]

          console.log(this.arrobj[0].category1[0].details)
          console.log(this.arrobj[1].category2[0].details)





        }
    }
}
        
</script>
