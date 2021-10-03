<template>
    <div>
        <label for="default-input" class="b--form-label-a">Search</label>
        <div class="b--form-input-a">
            <input type="text" id="default-input" v-model="query" v-on:keyup="autoComplete" class="b--form-input-a__item" placeholder="Search by movie name and genre">
        </div>
        <div class="b--suggestions-a" v-if="suggestions.length">
            <h2 class="b--suggestions-a__title">Suggestions...</h2>
            <ul class="b--vlist-a">
                <li class="b--vlist-a__list-item" v-for="result in suggestions" :key="result">
                    <a href="#" class="b--link-a" v-on:click="search(result)" v-html="mark(result.toLowerCase())"></a>
                </li>
            </ul>
        </div>
        <div class="b--results-a" v-if="results.length">
            <h2 class="b--results-a__title">Results</h2>
            <ul class="b--vlist-a">
                <li class="b--vlist-a__list-item" v-for="result in results" :key="result.id">
                    <a href="#" class="b--link-b" v-on:click="showDetails(result)">{{ result.name }} ({{ result.year }})</a>
                </li>
            </ul>
        </div>

        <div id="modal-1" class="b--modal-a" role="dialog" v-if="film">
            <div class="b--card-a">
                <div class="b--card-a__media-wrapper">
                    <img class="b--card-a__media-wrapper__media" :src="getImage(film.image)" alt="">
                </div>
                <div class="b--card-a__bd">
                    <h3 class="b--card-a__bd__title">{{ film.name }} ({{ film.year }})</h3>
                    <p class="b--card-a__bd__content">Genre: {{ film.genre }}</p>
                </div>
                <button class="b--modal-a__btn" data-dismiss="modal-1" aria-label="Close">
                    <svg class="b--modal-a__btn__icon apb apb-close" viewBox="0 0 15.81 15.81" enable-background="new 0 0 15.81 15.81" xml:space="preserve">
                        <path d="M8.74,8.03l6.82,6.82l-0.71,0.71L8.03,8.74l-7.07,7.07L0.25,15.1l7.07-7.07L0,0.71L0.71,0l7.32,7.32l7.07-7.07l0.71,0.71
                        L8.74,8.03z"/>
                    </svg>
                </button>
            </div>
        </div>

    </div>
</template>
<script>

    export default{
    data(){
        return {
            query: '',
            suggestions: [],
            results: [],
            film: null,
            showDetails(film) {

                this.film = film;

                //target
                let targetID = "#modal-1";
                let targetClass = "b--modal-a--is-active";
                
                // backdrop
                let backdropClass = "b--backdrop-a--is-active";

                setTimeout(function() {
                    document.querySelector(targetID).classList.toggle(targetClass);
                    //create Backdrop div with class
                    let div = document.createElement('div');
                    div.className = backdropClass;
                    document.body.appendChild(div);

                    let closeBtn = document.querySelector('[data-dismiss]');
                    closeBtn.addEventListener('click', event => {
                        event.preventDefault(); 
                        document.querySelector(targetID).classList.remove(targetClass);
                        var div = document.querySelector('.' + backdropClass);
                        div.parentNode.removeChild(div);
                    });

                    // close modal on Bakcdrop Click
                    let backdrop = document.querySelector("." + backdropClass);
                    backdrop.addEventListener('click', event => {
                        event.preventDefault(); 
                        document.querySelector(targetID).classList.remove(targetClass);
                        var div = document.querySelector('.' + backdropClass);
                        div.parentNode.removeChild(div);
                    });
                }, 100);
            },
            getImage(image) {
                return '../storage/img/' + image;
            }
        }
    },
        
    methods: {
        autoComplete(){
            this.suggestions = [];
            if(this.query.length > 0){
                axios.get('/autocomplete',{params: {query: this.query}}).then(response => {
                    this.suggestions = response.data;
                });
            }
        },
        search(query) {
            this.suggestions = [];
            this.results = [];
            axios.get('/search',{params: {query: query}}).then(response => {
                this.results = response.data;
            });
        },
        mark(result){
            let c = new RegExp(this.query, "ig");
                return result.replace(c,"<mark>"+this.query+"</mark>");
            }
        },
        
    }
</script>