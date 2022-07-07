const user = {
    name: 'toto',
    sayName(){
        console.log(this.name)
    },
    sayName2: function () {
        console.log(this.name);
    },
    sayName3: () => console.log(this.name)
}

const message = `"guillemets" c'est trop génial !
Saut de ligne
- Encore un;
            Tabulations`;

console.log(message);

const flowers = ['Tulipes', 'Brocoli', 'Marguerite'];
//const fleur1 = flowers[0];
//const fleur2 = flowers[1];

const [fleur1, fleur2, ...rest] = flowers;

console.log(fleur1); // string
console.log(fleur2); // string
console.log(rest); // tableau

function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current)
}

sum(25, 26, 789);

const copy = flowers;
copy.push('Paquerettes');
console.log( flowers.includes('Paquerettes') ); // true

const true_copy = Array.from(flowers);
const true_copy_bis = [...flowers];


const fruit = {name: 'Framboise', tree: 'Framboisier', color: 'red'};

const {name, color, tree: arbre} = fruit;

console.log(name); // framboise
console.log(color); // red
console.log(arbre); // framboisier

const fruit_copy = {...fruit};










// Requêtes HTTP


function getDatas() {
    fetch.get('apiurl')
        .then( response => response.json())
        .then(changed => {
            console.log(changed)
        })
        .catch(err => console.error(err))
        .finally(() => console.info('Finito !'))
}

let donnees;

async function getDataModerne() {
    try {
        const response = await axios.get('monapi');
        console.log(response);
        donnee = await changed(response)
    } catch (err) {
        console.error(err)
    } finally {
        console.info('finito')
    }
}

getDataModerne()




function change(donnne) {
    return axios.get('machin') // promesse
}

change.then(bidule => //....)



getDatas();

console.info('Un truc super important')



const sum = (a, b, ...numbs) => a + b + numbs.reduce((prev, curr) =>  prev + curr)

console.log(sum(10, 20, 52, 56))


const legumes = ['Carottes', 'Brocolis', 'Frites'];

legumes.reduce((previous, current) => {
    console.log('previous : ', previous);
    console.log('current : ', current);
    return 'machin'
})




