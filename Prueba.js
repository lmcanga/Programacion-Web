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

document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navWrapper = document.getElementById('nav-wrapper');
    const menuLinks = document.querySelectorAll('.menu a');

    if (menuHamburguesa && navWrapper) {
        menuHamburguesa.addEventListener('click', () => {
            menuHamburguesa.classList.toggle('activo');
            navWrapper.classList.toggle('menu-abierto');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navWrapper.classList.contains('menu-abierto')) {
                menuHamburguesa.classList.remove('activo');
                navWrapper.classList.remove('menu-abierto');
            }
        });
    });
});