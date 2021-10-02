<template>
    <div>
        <label for="default-input" class="b--form-label-a">Search</label>
        <div class="b--form-input-a">
            <input type="text" id="default-input" v-model="query" v-on:keyup="autoComplete" class="b--form-input-a__item" placeholder="Search by movie name and genre">
        </div>
        <div class="f--mt-36" v-if="results.length">
            <ul class="b--vlist-a">
                <li class="b--vlist-a__list-item" v-for="result in results" :key="result.id">
                    <a href="#" class="b--link-a">{{ result.name }} ({{ result.year }})</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
 export default{
  data(){
   return {
    query: '',
    results: []
   }
  },
  methods: {
   autoComplete(){
    this.results = [];
    if(this.query.length > 2){
     axios.get('/search',{params: {query: this.query}}).then(response => {
      this.results = response.data;
     });
    }
   }
  }
 }
</script>