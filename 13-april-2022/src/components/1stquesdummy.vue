<template>
  <b-container fluid>
      <b-form-input v-model="value" placeholder="enter country name" required></b-form-input>
       <button @click="getData()">click button</button>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          class="mb-0"
        >
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        
       
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="name">name</b-form-checkbox>
            <b-form-checkbox value="domains">domains</b-form-checkbox>
            <b-form-checkbox value="web_pages">web_pages</b-form-checkbox>
            <b-form-checkbox value="country">country</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-container class="bv-example-row">
     
        <b-card-text v-for="data1 in posts" :key="data1.id">
          
            <b-row>
              <b-col>University name:{{ data1.name }}</b-col>
            </b-row><br>

            <div class="w-100"></div>

            <b-row>
              <b-col>Domain:{{ data1.domains }}</b-col>
              <b-col>Web-pages:{{ data1.web_pages }}</b-col>
               <b-col>Country:{{ data1.country }}</b-col>
            </b-row>
          
        </b-card-text>
   
    </b-container>


   
    <!-- Main table element -->
    <b-table
      :items="posts"
      :fields="fields"
    
      :filter="filter"
      :filter-included-fields="filterOn"
      
      
      @filtered="onFiltered"
    >
      

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

    
  </b-container>
</template>

<script>
  export default {
      name:"QnEW",
    data() {
      return {
      posts:" ",
      fields: ["name", "domains","web_pages","country"],
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
        async getData() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country="+this.value);
        this.posts = await response.json();
        //this.value=this.posts;
      } 
      catch (error) {
        console.log(error);
      }
    },
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },

    created() {
    this.getData();
  }
  }
</script>
<style scoped>

</style>