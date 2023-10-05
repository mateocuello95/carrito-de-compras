// Variables globales
const carrito = [];
let total = 0;

// Asociar imágenes a los productos
const productosConImagenes = {
    producto1: "img/bicicleta-montana-expert-renegade-hombre-rod-26-frenos-disco-21cambio-rojo.jpg",
    producto2: "img/consola-sony-playstation-4-ps4-slim-1tb-consola-sony-playstation-4-ps4-slim-1tb.jpg",
    producto3: "img/pelota-nike-strike-white.jpg",
};

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const productoSeleccionado = document.getElementById("producto").value;
    const cliente = document.getElementById("cliente").value;
    const rut = document.getElementById("rut").value;
    let precio = 0;
    let imagen = "";

    // Obtener el precio y la imagen del producto seleccionado
    switch (productoSeleccionado) {
        case "producto1":
            precio = 100;
            imagen = productosConImagenes.producto1;
            break;
        case "producto2":
            precio = 200;
            imagen = productosConImagenes.producto2;
            break;
        case "producto3":
            precio = 300;
            imagen = productosConImagenes.producto3;
            break;
        default:
            precio = 0;
    }

    if (precio > 0) {
        carrito.push({
            producto: productoSeleccionado,
            precio: precio,
            imagen: imagen,
            cliente: cliente, // Agregar el nombre del cliente al objeto del carrito
            rut: rut,         // Agregar el RUT al objeto del carrito
        });

        // Actualizar la tabla del carrito y el total
        actualizarCarrito();
    }
}

// Función para actualizar la tabla del carrito y el total
function actualizarCarrito() {
    const carritoBody = document.getElementById("carrito-body");
    const totalElement = document.getElementById("total");
    carritoBody.innerHTML = "";

    carrito.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.imagen}" alt="${item.producto}" width="50"></td>
            <td>${item.producto}</td>
            <td>$${item.precio}</td>
            <td>${item.cliente}</td>
            <td>${item.rut}</td>
        `;
        carritoBody.appendChild(row);
    });

    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    totalElement.textContent = total;
}