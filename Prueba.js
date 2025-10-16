let carritoItems = 0;

function agregarCarrito(nombre, precio) {
    carritoItems++;
    document.getElementById('carrito-count').textContent = carritoItems;
    alert('Producto agregado: ' + nombre + ' - $' + precio);
}

function verCarrito() {
    if (carritoItems === 0) {
        alert('El carrito está vacío');
    } else {
        alert('Tienes ' + carritoItems + ' producto(s) en el carrito');
    }
}

function mostrarMasProductos() {
    const productosOcultos = document.querySelectorAll('.producto-oculto');
    productosOcultos.forEach(producto => {
        producto.classList.remove('producto-oculto');
    });
    document.getElementById('boton-ver-mas').style.display = 'none';
}