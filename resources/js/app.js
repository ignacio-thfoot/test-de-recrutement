require('./bootstrap');

import Vue from "vue";
import searchVue from './vue/search.vue';
import Blazy from 'blazy';

class FilmSearch {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener( "click", this.events );
        new Blazy({ 
            selector: '.b--lazy-a',
            successClass: 'b--lazy-a--fade-in',
        });
        new Vue({
            el: 'search',
            render: h => h(searchVue),
        });
    }

    events(event){
        var element = event.target;

        if(element.getAttribute('data-ds-element') == 'modal'){

        
            event.preventDefault();
    
            

        }
    }
}

export default FilmSearch;
new FilmSearch();