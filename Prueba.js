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
let timeoutEntrada;
let timeoutSalida;

function mostrarNotificacion(mensaje) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    clearTimeout(timeoutEntrada);
    clearTimeout(timeoutSalida);
    container.innerHTML = '';

    const notif = document.createElement('div');
    notif.className = 'toast';
    notif.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <span>${mensaje}</span>
    `;

    container.appendChild(notif);

    timeoutEntrada = setTimeout(() => {
        notif.classList.add('show');
    }, 10);

    timeoutSalida = setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => {
            if (container.contains(notif)) {
                container.removeChild(notif);
            }
        }, 500);
    }, 3000);
}

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
    mostrarNotificacion(nombre + ' fue agregado al carrito.');
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
        totalPrecio.textContent = '$0';
    } else {
        let total = 0;
        productosEnCarrito.forEach(item => {
            const li = document.createElement('li');
            const precioTotalItem = item.precio * item.cantidad;
            
            li.innerHTML = `
                <span class="item-info">${item.nombre} - $${precioTotalItem.toLocaleString('es-AR')}</span>
                <div class="item-controles">
                    <button class="btn-cantidad" onclick="restarCantidad('${item.nombre}')">-</button>
                    <span class="item-cantidad">${item.cantidad}</span>
                    <button class="btn-cantidad" onclick="sumarCantidad('${item.nombre}')">+</button>
                </div>
            `;
            
            listaCarrito.appendChild(li);
            total += precioTotalItem;
        });
        totalPrecio.textContent = `$${total.toLocaleString('es-AR')}`;
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