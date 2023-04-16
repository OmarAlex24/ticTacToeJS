// 1. Crear tablero
// 2. Decidir quien empieza primero
// 3. Si empieza el usuario preguntar en que posicion
// 3.1 Si empieza el algoritmo solo colocar pieza aleatoriamente
// 4. Despues de minimo 5 turnos verificar si alguien gano

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

	const turno = Math.ceil(Math.random() * 2);

	if (turno === 1) {
		console.log('Felicidades empiezas primero!');
	} else {
		console.log('Empieza la maquina');
	}
	return turno;
};

const posicionarJugador = (tableroModificado) => {
	while (true) {
		const posColumna = prompt('En que columna quieres colocar tu pieza(1-3): '); //1
		const posFila = prompt('En que fila quieres colocar tu pieza(1-3): '); //1

		if (posColumna > 3 || posFila > 3 || posColumna < 1 || posFila < 1) {
			console.log('Posicion invalida, intentelo de nuevo');
		} else {
			return posColumna - 1, posFila - 1;
		}
	}
};
const posicionarMaquina = (tableroModificado) => {
	const posColumna = Math.ceil(Math.random() * 3) - 1;
	const posFila = Math.ceil(Math.random() * 3) - 1;

	return posColumna, posFila;
};

const imprimirTablero = (tablero, posColumna, posFila, turno) => {
	if (tablero[posColumna][posFila] !== undefined) {
		if (turno === 1) {
			tablero[posColumna][posFila] = 'X';
		} else {
			tablero[posColumna][posFila] = 'O';
		}
	}
};

const verificarGanador = (tablero) => {
	tablero.forEach((element) => {
		if (element === tablero[0]) {
			return true;
		}
	});
	return false;
};

const juego = () => {
	const tablero = crearTablero();
	console.log(tablero);

	let Turno = decidirTurno();

	const tableroModificado = [...tablero];

	const ganador = verificarGanador(tableroModificado);

	while (ganador === false) {
		if (Turno === 1) {
			const turnoJugador = posicionarJugador(tableroModificado);
			Turno = 2;
			console.log(turnoJugador);
		} else {
			const turnoMaquina = posicionarMaquina(tableroModificado);
			Turno = 1;
			console.log(turnoMaquina);
		}
	}
};

juego();
