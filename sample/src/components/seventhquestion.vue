<template>
  <div>
    <div>
      <form name="form">
        <label for="Status">Status</label>
        <select id="stat">
          <option>Select</option>
          <option @click="openfun()">Opening</option>
          <option @click="pendingfun()">Pending</option>
          <option @click="closefun()">Closed</option>
        </select>
      </form>
      <button @click="openfun()">open</button>
      <p>{{ opendata }}</p>
    </div>
    <div>
      <center><table>
        <thead>
          <tr>
            <td>Email</td>
            <td>Id</td>
            <td>Name</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data1 in data" :key="data1.id">
            <td>{{ data1.email }}</td>
            <td>{{ data1.id }}</td>
            <td>{{ data1.name }}</td>
            <td>{{ data1.status }}</td>
          </tr>
        </tbody>
      </table></center>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionSev",
  data() {
    return {
      data: [
        {
          email: "Eliseo@gardner.biz",
          id: 1,
          name: "id labore ex et quamlaborum",
          status: "open",
        },

        {
          email: "Jayne_Kuhic@sydney.com",
          id: 2,
          name: "quovero reiciendis velit similiqueearum",
          status: "pending",
        },

        {
          email: "Nikita@garfield.biz",
          id: 3,
          name: "odioadipisci rerum autanimi",
          status: "closed",
        },

        {
          email: "Lew@alysha.tv",
          id: 4,
          name: "alias odio sit",
          status: "pending",
        },
      ],

      opendata: "",
      text: "",
    };
  },

  methods: {
    openfun() {
      this.opendata = this.data[0];
    },
    pendingfun(){
       this.opendata = this.data[0];

    },
    closedfun(){
       this.opendata = this.data[0],this.data[1];

    }
  },
};
</script>

