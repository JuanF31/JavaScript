function sumar(a, b){
    return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);

//Ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularPrecio(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

let totalPagar = calcularPrecio(total);

console.log(total);
console.log(`El total a pagar es de ${totalPagar}`);