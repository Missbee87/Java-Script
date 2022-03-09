const servicios = [
    {
        nombre: "Tratamiento cerámico",
        id: 1,
        precio: 10000
    },
    
    {
        nombre: "Renew car",
        id: 2,
        precio: 30000
    },
    {
        nombre: "Sacabollos artesanal",
        id:3,
        precio: 50000
    },
]

const contenedorServicios = document.querySelector(".contenedor-servicios");
const listadoFavoritos = document.querySelector(".listado-favoritos");
const favoritos = [];
document.addEventListener("DOMContentLoaded", () => {
    mostrarServicios();
});
function mostrarServicios() {
    for (const servicio of servicios) {
        const divServicio = document.createElement("div");
        divServicio.classList.add("card");
        const tituloServicio = document.createElement("h2");
        tituloServicio.classList.add("titulo-servicio");
        tituloServicio.textContent = servicio.nombre;

        const btnAgregar = document.createElement("button");
        btnAgregar.classList.add("btn-favorito");
        btnAgregar.textContent = "Agregar a favorito";
        btnAgregar.onclick = agregarAFavorito;
        btnAgregar.onclick = () => {
            agregarAFavorito(servicio.id);
        
        };
        divServicio.appendChild(tituloServicio);
        divServicio.appendChild(btnAgregar);

        contenedorServicios.appendChild(divServicio);
    
    
    }
}
function agregarAFavorito(id) {
    const servicioEncontrado = servicios.find( servicio => servicio.id === id);
    favoritos.push(servicioEncontrado)
    mostrarFavoritos(favoritos);
}
function mostrarFavoritos(arregloFavoritos){
    listadoFavoritos.innerHTML = "";
    for (const servicio of arregloFavoritos) {
        const divServicio = document.createElement("div");
        divServicio.classList.add("card");
        const tituloServicio = document.createElement("h2");
        tituloServicio.classList.add("titulo-servicio");
        tituloServicio.textContent = servicio.nombre;
        
        
        divServicio.appendChild(tituloServicio);
        listadoFavoritos.appendChild(divServicio);
    }
    
}
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave,valor);
};

for (const nombre of servicios) {
    guardarLocal(nombre.id, JSON.stringify(nombre));

}

guardarLocal("listaServicio", JSON.stringify(servicios));




const servicioUno = { id:1, servicio:"tratamiento cerámico"};
const servicioToJSON = JSON.stringify(servicioUno);

console.log(servicioToJSON);
console.log(servicioUno);

console.log(typeof servicioToJSON);
console.log(typeof servicioUno);

localStorage.setItem("servicio", servicioUno);
localStorage.setItem("servicioConvertido", servicioToJSON);

let t = localStorage.getItem("servicioConvertido");
console.log(t);

let objT  = JSON.parse(t);
console.log(objT);
console.log(objT.id);







