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

// FUNCIÓN CORREGIDA PARA MOSTRAR MÁS PRODUCTOS
function mostrarMasProductos() {
    // Seleccionamos todos los productos que están ocultos
    const productosOcultos = document.querySelectorAll('.producto-oculto');
    
    // Les quitamos la clase que los oculta.
    // Al quitar la clase, el !important desaparece y el producto se vuelve visible.
    productosOcultos.forEach(producto => {
        producto.classList.remove('producto-oculto');
    });
    
    // Ocultamos el botón "Ver más" después de hacer clic
    document.getElementById('boton-ver-mas').style.display = 'none';
}