<template>
  <div id="main">

    <h1>{{ title }}</h1>
    <p>La syntaxe de template</p>

    <h2>Interpolation</h2>
    <p>1 + 1 = {{ 1 + 1}}  </p>
    <p>{{title.toUpperCase()}}</p>
    <p>{{span}}</p>

    <h2>Attribute Binding</h2>

    <p v-bind:id="super_id">Un super paragraphe</p>
    <p :id="super_id + 2">Un deuxième super paragraphe</p>


    <p :class="dynamic_class">Une classe bindée</p>

    <!-- active la propriété si truthy, et ne la met pas si falsy -->
    <button :disabled="is_disabled">Ne cliquez pas ici !</button>


    <h2>Dynamisme</h2>

    <p>Le click : </p>

    <button v-on:click="sayCoucou">Coucou</button>
    <button @click="sayCoucou()">Coucou 2</button>

    <button @click="increment">Counter : {{counter}}</button>

    <p :class="color">Je suis un paragraphe coloré</p>

    <button @click="changeColor('red')">Rouge</button>
    <button @click="changeColor('blue')">Bleu</button>
    <button @click="changeColor('purple')">Violet</button>

    <h2>Style & Class binding</h2>

    <p :class="color">Une seule classe dynamique </p>

    <input class="static" :class="{error: has_error, 'active': true}"/>
    <button @click="toggleError">Error</button>

    <p class="static" :class="[color, super_id]">Plusieurs classes dynamiques</p>

    <p :class="[color, {error: has_error}, has_error? classe1 : 'encore-une-classe', classe3]">
      Des classes super dynamiques
    </p>


    <h3>Style</h3>

    <p :style="{fontSize: size + 'px', background: bg}">Dynamic style</p>

    <p :style="my_style">Object dynamic style</p>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      title: 'Presentation de Vue',
      span: '<span style="color:green">Coucou</span>',
      super_id: 'truc',
      dynamic_class: 'red',
      is_disabled: true,
      counter: 0,
      color: 'blue',
      has_error: false,
      classe1: 'classe1',
      classe2: 'classe2',
      classe3: 'classe3',
      size: 25,
      bg: 'aqua',
      my_style: {
        fontSize: '25px',
        color: 'aqua',
        background: 'rebeccapurple'
      },


    }
  },
  methods: {
    sayCoucou() {
      console.log('Coucou')
    },
    increment: function () {
      this.counter++;
    },
    changeColor(color) {
      this.color = color;
    },
    toggleError() {
      this.has_error = !this.has_error;
    },
    getColor() {
      console.log('in get color')
      return this.has_error? 'blue' : 'pink';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#main {
  --main-color: v-bind(getColor());
}

h2 {
  color:;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.purple {
  color: purple;
}

.error {
  border: solid var(--main-color);
}

</style>
