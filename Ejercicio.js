function evaluarNumeros(a, b, c, d) {
  // Suma los dos primeros argumentos
  const suma1 = a + b;
  // Suma los dos segundos argumentos
  const suma2 = c + d;
  // Multiplica los resultados de las sumas
  const resultado = suma1 * suma2;
  
  // Evalúa si el resultado es mayor o menor que 50
  if (resultado > 50) {
    console.log("¡El número es mayor que 50!");
  } else {
    console.log("¡El número es menor que 50!");
  }
}

// Ejemplo de uso
evaluarNumeros(10, 5, 2, 4);  // Salida: ¡El número es mayor que 50!
