require('./bootstrap');

import Vue from "vue";
import searchVue from './vue/autoComplete.vue'; //html for the Search functionality
import Blazy from 'blazy';
import Modal from './../js/ds/Modal';

class FilmSearch {
    constructor() {
        this.init();
    }

    init() {
        new Modal();
        new Blazy({ 
            selector: '.b--lazy-a',
            successClass: 'b--lazy-a--fade-in',
        });
        new Vue({
            el: 'autocomplete',
            render: h => h(searchVue),
        });
                
    }
}

export default FilmSearch;
new FilmSearch();