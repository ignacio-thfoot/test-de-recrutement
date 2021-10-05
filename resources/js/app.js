require('./bootstrap');

import Vue from "vue";
import searchVue from './vue/search.vue';
import Blazy from 'blazy';

class FilmSearch {
    constructor() {
        this.init();
    }

    init() {
        new Blazy({ 
            selector: '.b--lazy-a',
            successClass: 'b--lazy-a--fade-in',
        });
        new Vue({
            el: 'search',
            render: h => h(searchVue),
        });
    }
}

export default FilmSearch;
new FilmSearch();