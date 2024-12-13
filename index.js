// Voici une série d'exercices pour pratiquer l'algo

// Si vous avez des questions ou si vous avez besoin d'aide supplémentaire, n'hésitez pas à consulter les ressources en ligne sur JavaScript ou à demander de l'aide à vos pairs.

//----------------------------------------------------------------------------------------------//
// EXERCICE 1

// Ajuste la fonction "multiply" qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6

export const multiply = (a, b) => {
	return a * b;
};

console.info("Exercice 1 :", multiply(2, 3));

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Ajuste la fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
export const getFirstElement = (element) => {
	return element[0];
};

console.info("Exercice 2 : ", getFirstElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Ajuste la fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]

export const removeLastElement = (array) => {
	array.pop();
	return array;
};

console.info("Exercice 3 : ", removeLastElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Ajuste la fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6

export const sumArray = (array) => {
	return array.reduce((res, i) => res + i);
};
console.info("Exercice 4 : ", sumArray([5, 6, 7]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 5

//Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"

export const reverseString = (string) => {
	let res = "";
	for (let i = string.length - 1; i >= 0; i--) {
		res += string.charAt(i);
	}
	return res;
};

console.info("Exercice 5 : ", reverseString("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 6

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3

export const getMax = (array) => {
	const result = array.sort((a, b) => a - b);
	return result[result.length - 1];
};

console.info("Exercice 6 : ", getMax([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 7

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1

export const getMin = (array) => {
	const result = array.sort((a, b) => a - b);
	return result[0];
};

console.info("Exercice 7 : ", getMin([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 8

// Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"

export const removeVowels = (string) => {
	let result = "";
	for (let i = 0; i < string.length; i++) {
		const char = string.charAt(i);

		if (
			char !== "a" &&
			char !== "e" &&
			char !== "i" &&
			char !== "o" &&
			char !== "u" &&
			char !== "y"
		)
			result += char;
	}

	return result;
};

console.info("Exercice 8 : ", removeVowels("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 9

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]

export const sortArray = (array) => {
	const result = array.sort((a, b) => a - b);
	return result;
};

console.info("Exercice 9 : ", sortArray([1, 3, 2]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 10

// Ajuste la fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

export const getStringRotations = (string) => {
	const array = [];
	for (let i = 1; i < string.length + 1; i++) {
		const fin = string.slice(0, i); // variable ou je decoupe le
		const debut = string.slice(i);
		array.push(debut + fin);
	}
	return array;
};

console.info("Exercice 10 : ", getStringRotations("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 11

// Ajuste la fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]

export const incrementArray = (array) => {
	return array.map((addition) => addition + 1);
};

console.info("Exercice 11 : ", incrementArray([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 12

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]

export const getLengths = (array) => {
	return array.map((nombreCaract) => nombreCaract.length);
};

console.info("Exercice 12 : ", getLengths(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 13

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]

export const getFirstLetters = (array) => {
	return array.map((nombreCaract) => nombreCaract.charAt());
};

console.info("Exercice 13 : ", getFirstLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 14

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]

export const getLastLetters = (array) => {
	return array.map((lastLetter) => lastLetter.charAt(lastLetter.length - 1));
};

console.info("Exercice 14 : ", getLastLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 15

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]

export const filterLongStrings = (array) => {
	const result = [];
	for (let i = 0; i < array.length; i++)
		if (array[i].length >= 5) {
			result.push(array[i]);
		}
	return result;
};

console.info(
	"Exercice 15 : ",
	filterLongStrings(["Hello", "World", "Test", "Salut", "Yo"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 16

// Ajuste la fonction qui prend une chaîne de caractères en format snake_case et doit retourner une nouvelle chaîne de caractères contenant les mêmes mots, mais sans les underscores.
// Exemple : "Bonjour_c'est_papy" => "bonjour c'est papy"

export const snake_case = (string) => {
	return string.split("_").join(" ");
};

console.info("Exercice 16 : ", snake_case("Bonjour_c'est_papy"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 17

// Ajuste la fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]

export const mergeArrays = (array1, array2) => {
	return array1.concat(array2);
};

console.info(
	"Exercice 17 : ",
	mergeArrays(["Hello", "World"], ["Test", "Example"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 18

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les strings qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"].

export const filterStringsWithE = (array) => {
	return array.filter((lettre) => lettre.includes("e"));
};
console.info(
	"Exercice 18 : ",
	filterStringsWithE(["Poulet", "Chat", "Chien", "Cheval"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 19

// Ajuste la fonction qui prend en paramètre un tableau de nombres et qui doit retourner tous les nombres qui sont pairs par ordre croissant.
// Exemple : [2, 9, 6, 5, 6] => [2, 6, 6].

export const filterAndSortEvenNumbers = (array) => {
	const Croiss = array.sort((a, b) => a - b);
	return Croiss.filter((pair) => pair % 2 === 0);
};

console.info("Exercice 19 : ", filterAndSortEvenNumbers([2, 9, 6, 5, 6]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 20

// Ajuste la fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// Exemple :
// findShort("Prachett is the best author in the world") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

export const findShort = (string) => {
	let mot = string.split(" ");
	mot = mot.map((nbCaract) => (nbCaract = nbCaract.length));
	return Math.min(...mot);
};
console.info(
	"Exercice 20 : ",
	findShort("Prachett is the best author in the world"),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 21

// Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
// Deux chaînes sont des anagrammes si elles contiennent les mêmes caractères, quel que soit l'ordre.
// Exemple : anagram("listen", "silent") // true

export const anagram = (mot1, mot2) => {
	const split1 = mot1.split("");
	const split2 = mot2.split("");
	return split1.every((char) => split2.includes(char));
};

console.info("Exercice 21 : ", anagram("listen", "silent"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 22

// Écrivez une fonction qui enlève les doubles lettres d'une chaîne donnée.
// Exemple : removeDoubleLetters("google") // "gogle"

export const removeDoubleLetters = (mot) => {
	const caractere = mot.split("");
	let result = "";
	for (let i = 0; i < mot.length; i++) {
		if (caractere[i] !== caractere[i + 1]) result += caractere[i];
	}
	return result;
};

console.info("Exercice 22 : ", removeDoubleLetters("google"));

//----------------------------------------------------------------------------------------------//

// EXERCICE 23
// Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple : createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

export const createPhoneNumber = (number) => {
	const firstPart = number.slice(0, 3).join("");
	const secondPart = number.slice(3, 6).join("");
	const thirdPart = number.slice(6).join("");
	return `(${firstPart}) ${secondPart}-${thirdPart}`;
};

console.info(
	"Exercice 23 : ",
	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 24

// Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres et qui renvoie la lettre manquante de la série.
// Exemple : findMissingLetter(["a", "b", "c", "d", "f"]) // "e"

export const findMissingLetter = (arrayLetter) => {
	const asccii = arrayLetter.map((letter) => letter.charCodeAt(0));
	return String.fromCharCode(
		asccii.find((letter, index, array) => array[index + 1] - array[index] > 1) +
			1,
	);

	// for (let i = 0; i < arrayLetter.length; i++)
	// 	if (arrayLetter[i].charCodeAt(0) + 1 !== arrayLetter[i + 1].charCodeAt(0)) {
	// 		return String.fromCharCode(arrayLetter[i].charCodeAt(0) + 1);
	// 	}
};

console.info("Exercice 24 : ", findMissingLetter(["a", "b", "c", "d", "f"]));

//----------------------------------------------------------------------------------------------//

// EXERCICE 25
// Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple : sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]

export const sortString = (array) => {
	return array.sort();
};

console.info(
	"Exercice 25 : ",
	sortString(["Banana", "Orange", "Apple", "Mango"]),
);

//----------------------------------------------------------------------------------------------//
// EXERCICE 26

// Ajuste la fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// Exemple : otherAngle(30, 60) // 90
// Pour trouver le troisième angle, soustrayez la somme des deux angles donnés à 180 degrés.

export const otherAngle = (angle1, angle2) => {
	return 180 - (angle1 + angle2);
};

console.info("Exercice 26 : ", otherAngle(30, 60));

//----------------------------------------------------------------------------------------------//
// EXERCICE 27

// Ajuste la fonction qui peut déterminer si une année est une année bissextile ou non.
// Une année bissextile est divisible par 4, sauf si elle est divisible par 100, à moins qu'elle ne soit également divisible par 400.
// Exemple : isLeapYear(2020) // true

export const isLeapYear = (year) => {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	}
	return false;
};

console.info("Exercice 27 : ", isLeapYear(2022));

//----------------------------------------------------------------------------------------------//
// EXERCICE 28

// Ajuste la fonction qui prend en entrée un tableau contenant des noms d'animaux. La fonction doit renvoyer un nouveau tableau composé de deux sous-tableaux :
// Le premier sous-tableau doit inclure les noms des animaux domestiques.
// Le deuxième sous-tableau doit inclure les noms des animaux sauvages.
// Exemple : sortAnimals(animals) // [["Cat", "Dog"], ["Eagle", "Monkey"]]

export const sortAnimals = (animals) => {
	const domestiques = animals.slice(0, 2);
	const sauvages = animals.slice(2);
	return [domestiques, sauvages];
};

console.info("Exercice 28 : ", sortAnimals(["Cat", "Dog", "Eagle", "Monkey"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 29

// Complète la fonction decodeMessage() qui doit décoder un message chiffré utilisant le chiffre de César avec un décalage de 16 positions vers la droite dans l'alphabet. Le message sera fourni en majuscules et peut contenir des espaces ou d'autres caractères spéciaux qui doivent rester inchangés.
// Exemple : Si on appelle decodeMessage("XUBBE MEHBT"), la fonction doit renvoyer "HELLO WORLD".
// https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

export const decodeMessage = (message) => {};
console.info("Exercice 29 :", decodeMessage("XUBBE MEHBT"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 30

// Ajuste la fonction qui renverra notre score à partir des résultats des matchs.
// Exemple : calculateScore(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]) // 13
// Utilisez une boucle pour parcourir le tableau et une condition pour déterminer les points à ajouter.

// export const calculateScore = () => {

// };

// console.info(
// 	"Exercice 30 : ",
// 	calculateScore([
// 		"1:0",
// 		"2:0",
// 		"3:0",
// 		"4:4",
// 		"2:2",
// 		"3:3",
// 		"1:4",
// 		"2:3",
// 		"2:4",
// 		"3:3",
// 	]),
// );

// Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
// lui-même contenant deux sous-tableaux :
// Le premier contient uniquement des devs web seniors
// Le second ne contient que des data analysts seniors
// (Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)

// const persons = [
// 	{ name: "Mary", experience: 2, job: "web dev" },
// 	{ name: "Tony", experience: 6, job: "data analyst" },
// 	{ name: "John", experience: 2, job: "data analyst" },
// 	{ name: "Jane", experience: 6, job: "web dev" },
// 	{ name: "Maggie", experience: 2, job: "web dev" },
// 	{ name: "Leonardo", experience: 2, job: "data analyst" },
// 	{ name: "Carla", experience: 4, job: "data analyst" },
// 	{ name: "Mickael", experience: 7, job: "web dev" },
// 	{ name: "Penelope", experience: 7, job: "web dev" },
// 	{ name: "Homer", experience: 5, job: "data analyst" },
// 	{ name: "Leonardo", experience: 2, job: "data analyst" },
// 	{ name: "Carla", experience: 4, job: "web dev" },
// 	{ name: "Lisa", experience: 3, job: "web dev" },
// 	{ name: "Millie", experience: 5, job: "data analyst" },
// 	{ name: "Penelope", experience: 7, job: "web dev" },
// ];

// function findSeniors(persons) {
// 	const grp = Object.groupBy(
// 		persons,
// 		({ job, experience }) => `${job}-${experience >= 5 ? "sénior" : "junior"}`,
// 	);

// 	return [grp["web dev-sénior"], grp["data analyst-sénior"]];

// 	// Your code here !
// }
// console.log(findSeniors(persons));

/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]
*/
// Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
// Dans la salle les places sont réparties comme suit :
//    - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
//    - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la fonction theaterSieges pour qu'elle renvoie un tableau
// où chaque sous-tableau répertorie les positions des sièges dans une rangée.

// exemple du résultat final :

// [
//   ["1-1", "1-2", "1-3", ..., "1-100"],
//   ["2-1", "2-2", "2-3", ..., "2-100"],
//   ...
//   ["26-1", "26-2", "26-3", ..., "26-100"]
// ]
// const colonne = [];
// const siege = [];
// const theatre = [];
// for (let i = 1; i <= 26; i++) {
// 	colonne.push(i);
// 	for (let j = 0; j <= 100; j++) {
// 		siege.push(colonne + "-" + j);
// 	}
// }
// console.log(colonne);
// console.log(siege);

// function theaterSieges(sieges, colonnes) {
// 	// Your code here !
// }

// Your code here !
