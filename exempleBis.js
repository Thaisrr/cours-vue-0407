
let a;

// Si a est falsy -> '', unefined, 0, null....
a =  a || 'coucou 1';
a ||= 'coucou 1';
console.log(' || ', a)


// Si a est truthy alors change sa valeur
a = a && 'coucou 2';
a &&= 'Coucou 2';
console.log('&&', a)

// Si a est undefined ou null
a = a ?? 'coucou 3';
a ??= 'Coucou 3'
console.log('??', a)


