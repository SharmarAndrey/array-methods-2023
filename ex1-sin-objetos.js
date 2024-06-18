/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach((number) => console.log("Ejercicio 1:", number));
/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const mayor10 = numbers.find((n) => n > 10);
console.log("Ejercicio 2:", mayor10);
/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const siExiste = numbers.some((n) => n > 20);
console.log("Ejercicio 3:", siExiste);
/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const elNumeroPar = numbers.every((n) => n % 2 !== 0);
console.log("Ejercicio 4:", elNumeroPar);
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const newNumbers = numbers.filter((n) => 3 < n & n < 9);
console.log("Ejercicio 5:", newNumbers)
/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
const otroArray = numbers.map(n => {
	if (n > 0) {
		return 1;
	}
	return -1;


});
console.log("Ejercicio 6:", otroArray);

