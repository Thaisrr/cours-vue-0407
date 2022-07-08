import {defineStore} from "pinia";
import axios from "axios";

export const useColadaStore = defineStore('colada', {
    state: () => ({
        counter : 0,
        cocktail: 'Pina Colada',
        panier: []
    }),
    getters: {
        size_panier: (state) => state.panier.length
    },
    actions: {
        increment: function ()  { this.counter++},
        addToPanier: function ( item) {
            // todo : faire des vérifications
            this.panier.push(item)
        },
        emptyPanier: function () {this.panier = []},
        getPanier: async function () {
            const {data} = await axios.get('mon url');
            this.panier = data;
        }
    }
})