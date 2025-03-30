// Variables para almacenar el carrito y el total
let carrito = [];
let total = 0;

// Función para agregar un paquete al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    listaCarrito.innerHTML = ""; // Limpia la lista antes de actualizarla

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toLocaleString()} COP`;

        // Botón para eliminar productos del carrito
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total.toLocaleString(); // Actualiza el total
}

// Función para eliminar un paquete del carrito
function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});
