const students = [
	"Albertina",
	"Katerina",
	"Ester",
	"Galis",
	"Oriol",
	"Susana",
	"McCarmen",
	"Gerard",
	"Dayane",
	"Susana",
	"Diego",
	"Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(s => console.log(s)
);
// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const indexOfStudent = students.findIndex(s => s == "Maria"); console.log('indica que ocupa el sting "MAria" es :', indexOfStudent);

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const nameExist = students.some(n => n == "Katerina");
console.log('El nombre Katerina existe en el array ? ', nameExist);

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const nameWIthFiveLetters = students.find(s => s.length <= 5);
console.log('el primer nombre que tiene 5 o menos carácteres :', nameWIthFiveLetters);

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const stringsLength = students.every(s => s.length >= 4);
console.log('todos los strings de este array tienen 4 o más carácteres ?', stringsLength);

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

const names_l = students.filter(s => s.includes("i"));
console.log(names_l);
// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

const letrasIniciales = students.map(s => s.charAt(0));
console.log(letrasIniciales);
