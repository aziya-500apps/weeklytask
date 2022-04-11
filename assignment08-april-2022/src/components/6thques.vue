<template>
  <div>
    <b-dropdown id="dropdown-1" text="Country" class="m-md-2">
      <b-dropdown-item @click="funindia()">India</b-dropdown-item>

      <b-dropdown-item @click="funsrilanka()">srilanka</b-dropdown-item>

      <b-dropdown-item @click="funusa()">us</b-dropdown-item>
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
    funindia() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "India") return arrItem;
      });
      console.log(country);
    },
    funsrilanka() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "srilanka") return arrItem;
      });
      console.log(country);
    },
    funusa() {
      let country = this.countrydet.map((arrItem) => {
        if (arrItem.name == "us") return arrItem;
      });

      console.log(country);
    },
  },
};
</script>