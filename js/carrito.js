// carrito.js
const mainCarrito = document.getElementById("carrito")
// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    // Limpiar contenido anterior del carrito
    mainCarrito.innerHTML = "";
  
    // Crear elementos HTML para cada producto en el carrito
    carrito.forEach((producto) => {
      let contenido = document.createElement("div");
      contenido.className = "producto";
      contenido.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}" class="imagen" />
        <div class="descripcion">
          <h2 class="nombre">${producto.nombre}</h2>
          <p class="precio">${producto.precio} $</p>
          <button class="eliminar">Eliminar</button>
        </div>
      `;
  
      // Agregar evento "click" al botón "Eliminar" para quitar el producto del carrito
      let botonEliminar = contenido.querySelector(".eliminar");
      botonEliminar.addEventListener("click", () => {
        carrito = carrito.filter((p) => p.id !== producto.id);
        mostrarCarrito();
      });
  
      mainCarrito.appendChild(contenido);
    });
  }
  
  // Mostrar contenido del carrito al cargar la página
  mostrarCarrito();
  