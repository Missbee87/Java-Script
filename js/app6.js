const autenticado = true;
const puedePagar = false;
const respuesta = document.querySelector("#respuesta");
autenticado && puedePagar
    ? (respuesta.innerHTML = "Esta autenticado")
    : (respuesta.innerHTML = "No esta autenticado");

const carrito = [];
let res = carrito.length === 0 && "carrito esta vacio";
respuesta.innerHTML = res;