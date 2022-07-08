import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        username: 'Jean Michel',
        counter: 0,
        joke: ''
    },
    getters: {
        uppername: (state) => state.username.toUpperCase(),
        character: (state) => (index) => state.username.charAt(index)
    },
    mutations: {
        increment: (state) => {
            state.counter++;
            localStorage.setItem('counter', state.counter)
        },
        changeName: (state, name) => { state.username = name},
        recupCounter: (state) => {
            const counter = localStorage.getItem('counter');
            if(counter) state.counter = counter;
        },
        setJoke: function (state, joke) {
            state.joke = joke
        }
    },
    actions: {
        getJoke: async function(state) {
            const {data} = await axios.get('https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode');
            console.log(data)
            state.commit('setJoke', data.joke)
        }
    }
})

export default store;