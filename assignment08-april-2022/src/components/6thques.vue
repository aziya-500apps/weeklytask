<template>
  <div>
    <b-dropdown id="dropdown-1" text="Country" class="m-md-2">
      <b-dropdown-item @click="India()">India</b-dropdown-item>

      <b-dropdown-item @click="srilanka()">srilanka</b-dropdown-item>

      <b-dropdown-item @click="usa()">us</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "QuE6",

  data() {
    return {
      countrydet: [
        { id: 1, name: "India" },
        { id: 2, name: "srilanka" },
        { id: 3, name: "us" },
        { id: 4, name: "us" },
        { id: 5, name: "India" },
      ],
    };
  },
  methods: {
    India() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "India") return arrItem;
      });
      console.log(country);
    },
    srilanka() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "srilanka") return arrItem;
      });
      console.log(country);
    },
    usa() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "us") return arrItem;
      });

      console.log(country);
    },
  },
};
</script>