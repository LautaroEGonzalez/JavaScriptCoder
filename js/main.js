 
const principal = document.getElementById("principal");
const verCarrito = document.getElementById("verCarrito")
const mainCarrito = document.getElementById("carrito")
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
  });
});
verCarrito.addEventListener("click", () => {
  const header = document.createElement("div");
  // header.className = (""); 
  header.innerHTML =`
    <h1> carrito </h1>
`;
mainCarrito.append(header);

const button = document.createElement("h1");
button.innerText("X");

header.append(button);
})
console.log(mainCarrito)


