// Imprimir tabla de multiplicar en la consola
const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./configs/yargs-config");

require("colors");

console.clear();
// console.log(argv);

// Ejemplo de lectura de argumentos por consola
// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split("=");

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(`${archivo}`.rainbow))
  .catch((err) => console.log(err));
