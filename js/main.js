 
const principal = document.getElementById("principal");
const verCarrito = document.getElementById("verCarrito")

let carrito = [];

productos.forEach((producto) => {
  let contenido = document.createElement("div");
  contenido.className= "card text-center";
  contenido.innerHTML = `
  
  <img src="${producto.img}" class="card-img-top">
  <h5 class="">${producto.nombre}</h5>
  <p class="">${producto.precio}$</p>
  
  `;
  principal.append(contenido);

  let comprar = document.createElement("button");
  comprar.className= "btn btn-primary";
  comprar.innerText = "comprar";
  contenido.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id : producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
    });
    console.log(carrito);

  // Mostrar notificación con Toastify
  Toastify({
    text: `Se ha agregado ${producto.nombre} al carrito.`,
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#007bff",
    stopOnFocus: true,
  }).showToast();
});
});
// Agregar evento click al botón "verCarrito"
verCarrito.addEventListener("click", () => {
  event.preventDefault();
  let productosEnCarrito = "";

  // Crear tabla con los productos en el carrito
  if (carrito.length > 0) {
    productosEnCarrito += `
      <table>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio por unidad</th>
          <th>Precio total</th>
          <th></th>
        </tr>
    `;

    carrito.forEach((producto) => {
      productosEnCarrito += `
        <tr>
          <td>${producto.nombre}</td>
          <td>1</td>
          <td>${producto.precio}$</td>
          <td>${producto.precio}$</td>
          <td><button id="borrar-${producto.id}" class="btn btn-danger">Borrar</button></td>
        </tr>
      `;
    });

    productosEnCarrito += `
      <tr>
        <td colspan="3"></td>
        <td><strong>Total:</strong></td>
        <td>${carrito.reduce((total, producto) => total + producto.precio, 0)}$</td>
      </tr>
    `;

    productosEnCarrito += "</table>";
  } else {
    productosEnCarrito = "No hay productos en el carrito.";
  }

  // Mostrar SweetAlert con los productos en el carrito
  Swal.fire({
    title: "Carrito de compras",
    html: productosEnCarrito,
    showCloseButton: true,
    showConfirmButton: false,
  });
});










 
