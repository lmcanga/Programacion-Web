document.addEventListener('DOMContentLoaded', function() {
    cargarCarritoDesdeLocalStorage();
    actualizarContador();

    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navWrapper = document.getElementById('nav-wrapper');
    const menuLinks = document.querySelectorAll('.menu a');
    const modalCarrito = document.getElementById('carrito-modal');
    const cerrarCarritoBtn = document.getElementById('cerrar-carrito');

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

    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener('click', () => {
            modalCarrito.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modalCarrito) {
            modalCarrito.style.display = 'none';
        }
    });
});

let productosEnCarrito = [];

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        productosEnCarrito = JSON.parse(carritoGuardado);
    }
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
}

function agregarCarrito(nombre, precio) {
    const numericPrice = parseFloat(precio) || 0;
    const productoExistente = productosEnCarrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        productosEnCarrito.push({ nombre: nombre, precio: numericPrice, cantidad: 1 });
    }
    
    guardarCarritoEnLocalStorage();
    actualizarContador();
    alert('Producto agregado: ' + nombre);
}

function sumarCantidad(nombre) {
    const producto = productosEnCarrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad++;
        guardarCarritoEnLocalStorage();
        verCarrito();
    }
}

function restarCantidad(nombre) {
    const producto = productosEnCarrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad === 0) {
            productosEnCarrito = productosEnCarrito.filter(item => item.nombre !== nombre);
        }
        guardarCarritoEnLocalStorage();
        verCarrito();
    }
}

function actualizarContador() {
    const totalItems = productosEnCarrito.reduce((sum, item) => sum + item.cantidad, 0);
    const contador = document.getElementById('carrito-count');
    if (contador) {
        contador.textContent = totalItems;
    }
}

function verCarrito() {
    const modal = document.getElementById('carrito-modal');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalPrecio = document.getElementById('carrito-total-precio');
    
    if (!modal) return;
    
    listaCarrito.innerHTML = ''; 
    actualizarContador();

    if (productosEnCarrito.length === 0) {
        listaCarrito.innerHTML = '<li>El carrito está vacío.</li>';
        totalPrecio.textContent = '$0.00';
    } else {
        let total = 0;
        productosEnCarrito.forEach(item => {
            const li = document.createElement('li');
            const precioTotalItem = item.precio * item.cantidad;
            
            li.innerHTML = `
                <span class="item-info">${item.nombre} - $${precioTotalItem.toFixed(2)}</span>
                <div class="item-controles">
                    <button class="btn-cantidad" onclick="restarCantidad('${item.nombre}')">-</button>
                    <span class="item-cantidad">${item.cantidad}</span>
                    <button class="btn-cantidad" onclick="sumarCantidad('${item.nombre}')">+</button>
                </div>
            `;
            
            listaCarrito.appendChild(li);
            total += precioTotalItem;
        });
        totalPrecio.textContent = `$${total.toFixed(2)}`;
    }
    
    modal.style.display = 'block';
}

function mostrarMasProductos() {
    const productosOcultos = document.querySelectorAll('.producto-oculto');
    productosOcultos.forEach(producto => {
        producto.classList.remove('producto-oculto');
    });
    const boton = document.getElementById('boton-ver-mas');
    if (boton) {
        boton.style.display = 'none';
    }
}