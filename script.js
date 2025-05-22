let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let total = document.getElementById("total");
    let contador = document.getElementById("contador");

    lista.innerHTML = "";
    let sumaTotal = 0;

    carrito.forEach((item, index) => {
        sumaTotal += item.precio;
        let li = document.createElement("li");
        li.innerHTML = `${item.producto} - Q${item.precio} <button onclick="eliminarDelCarrito(${index})">❌</button>`;
        lista.appendChild(li);
    });

    total.innerText = sumaTotal;
    contador.innerText = carrito.length;
    document.getElementById("carrito").classList.remove("oculto");
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", function() {
    let elementos = document.querySelectorAll(".fade-in");
    elementos.forEach(el => el.classList.add("active"));
});
