const principal = document.getElementById("principal");
const verCarrito = document.getElementById("verCarrito");
const resetCarrito = document.getElementById("resetCarrito");
const storageKey = "carrito";

let carrito = JSON.parse(localStorage.getItem(storageKey)) || []; // Obtener el carrito del storage, si no existe crear un array vacío

productos.forEach((producto) => {
  let contenido = document.createElement("div");
  contenido.className = "card text-center";
  contenido.innerHTML = `
  
  <img src="${producto.img}" class="card-img-top">
  <h5 class="">${producto.nombre}</h5>
  <p class="">${producto.precio}$</p>
  
  `;
  principal.append(contenido);

  let comprar = document.createElement("button");
  comprar.className = "btn btn-primary";
  comprar.innerText = "comprar";
  contenido.append(comprar);

  comprar.addEventListener("click", () => {
    let productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({
        id: producto.id,
        img: producto.img,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
      });
    }
    console.log(carrito);

  
    localStorage.setItem(storageKey, JSON.stringify(carrito));

  
    Toastify({
      text: `Se ha agregado ${producto.nombre} al carrito.`,
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#d3a7ab",
      stopOnFocus: true,
    }).showToast();
  });
});


verCarrito.addEventListener("click", () => {
  event.preventDefault();
  let productosEnCarrito = "";

 
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
        <tr class="elemento-carrito">
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>${producto.precio}$</td>
          <td>${producto.precio * producto.cantidad}$</td>
          <td><button id="borrar-${producto.id}" class="btn btn-danger">Borrar</button></td>
        </tr>
      `;
    });
      

    productosEnCarrito += `
      <tr>
        <td colspan="3"></td> 
        <td><strong>Total:</strong></td>
        <td>${carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)}$</td>
      </tr>
    `;

    productosEnCarrito += "</table>";
  } else {
    productosEnCarrito = "No hay productos en el carrito.";
  }
 
  Swal.fire({
    title: "Carrito de compras",
    html: productosEnCarrito,
    showCloseButton:true,
    showConfirmButton: false,
  });
});
