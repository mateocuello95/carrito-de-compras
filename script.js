// Variables globales
const carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const productoSeleccionado = document.getElementById("producto").value;
    let precio = 0;

    // Obtener el precio del producto seleccionado (debes definir tus productos y precios)
    switch (productoSeleccionado) {
        case "producto1":
            precio = 100;
            break;
        case "producto2":
            precio = 200;
            break;
        case "producto3":
            precio = 300;
            break;
        default:
            precio = 0;
    }

    if (precio > 0) {
        carrito.push({
            producto: productoSeleccionado,
            precio: precio,
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
            <td>${item.producto}</td>
            <td>$${item.precio}</td>
        `;
        carritoBody.appendChild(row);
    });

    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    totalElement.textContent = `$${total}`;
}
