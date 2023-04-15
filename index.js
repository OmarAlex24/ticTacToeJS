// 1. Crear tablero
// 2. Decidir quien empieza primero
// 3. Si empieza el usuario preguntar en que posicion
// 3.1 Si empieza el algoritmo solo colocar pieza aleatoriamente

const prompt = require('prompt-sync')();

const crearTablero = () => {
	const tablero = [];

	const tamañoTablero = prompt(
		'Ingresa el tamaño de pixeles cuadrados que deseas el tablero: '
	);

	for (let i = 0; i < tamañoTablero; i++) {
		tablero.push([]);
	}

	return tablero;
};

const decidirTurno = () => {
	console.log('*Lanzando una moneda al aire*');

	const turno = Math.ceil(Math.random());

	if (turno === 1) {
		console.log('Felicidades empiezas primero!');
	} else {
		console.log('Empieza la maquina');
	}
};

const posicionarJugador = () => {
	const posicion = prompt('En donde quieres colocar tu pieza: ');
};

const tablero = crearTablero();
console.log(tablero);

const elegirTurno = decidirTurno();
console.log(elegirTurno);
