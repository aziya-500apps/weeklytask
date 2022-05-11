<template>
  <div>
    <b-form-input v-model="productname" placeholder="enter product name"></b-form-input>
    <b-form-input v-model="productprice" placeholder="enter product price"></b-form-input>
    <b-form-input v-model="productcategory" placeholder="enter product category"></b-form-input>
    <b-button @click="addproducts()">Click to add products</b-button>
    <b-table striped hover :items="products" :fields="fields"> </b-table>
  </div>
</template>
<script>
export default {
  name: "producT",
  data() {
    return {
      products: [
        { name: "Computer", price: 20000, category: "Electronics product" },
        { name: "Books", price: 10000, category: "Stationary product" },
      ],
      fields: ["name", "price", "category"],
      productname: "",
      productprice: "",
      productcategory: "",
    }
  },
  methods: {
    addproducts() {
      this.products.push({
        name: this.productname,
        price: this.productprice,
        category: this.productcategory,
      });
    },
  },
};
</script>
