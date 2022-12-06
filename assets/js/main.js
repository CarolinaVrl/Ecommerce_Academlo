const items = [
  {
    id: 1,
    name: "Hoodies",
    price: 14.0,
    image: "assets/images/featured1.png",
    category: "hoodies",
    quantity: 10,
  },
  {
    id: 2,
    name: "Shirts",
    price: 24.0,
    image: "assets/images/featured2.png",
    category: "shirts",
    quantity: 15,
  },
  {
    id: 3,
    name: "Sweatshirts",
    price: 24.0,
    image: "assets/images/featured3.png",
    category: "shirts",
    quantity: 20,
  },
];
// Variables
const contenedorDeCantidadProd = document.getElementById("card");
const theme = document.getElementById("theme"); //Para el fondo de pantalla
const body = document.body; //El body
const bag = document.getElementById("bag_shop");
const carrito = document.getElementById("cart_container");
const closerCarrito = document.getElementById("closer"); //Salir de la pantalla de compra
let carritoCompras = []; //El carrito de compras del cliente
const mostrador = document.getElementById("mostrador"); //Donde se muestran los productos a la venta
const spanCantidad = document.createElement("span");
const totalPagar = document.getElementById("total_pagar");
totalPagar.textContent = "$ 0.00";
spanCantidad.classList.add("cantidad_prod");
spanCantidad.textContent = 0;
contenedorDeCantidadProd.appendChild(spanCantidad);

// -----------------------------FUNCIONES---------------------------------------------------------
// imagen del theme

const darthemechange = () => {
  body.classList.toggle("dark");
  if (theme.classList.contains("bx-sun")) {
    theme.classList.replace("bx-sun", "bx-moon");
  } else {
    theme.classList.replace("bx-moon", "bx-sun");
  }
};
theme.addEventListener("click", (e) => darthemechange());

// bolsa de compras - carrito

bag.addEventListener("click", () => {
  if (carrito.classList.contains("compras_bag")) {
    carrito.classList.remove("compras_bag");
  }
});
closerCarrito.addEventListener("click", () => {
  carrito.classList.add("compras_bag");
});

const vibrarSocial = (item) => {
  item.target.classList.toggle("bx-tada");
};

// filtrado de productos

const addingView = (arr) => {
  mostrador.innerHTML = "";

  arr?.forEach((item) => {
    const seccion = document.createElement("section");
    seccion.classList.add("box_products");
    seccion.innerHTML = `
    <img src=${item.image} alt="producto ">
    <h2>  ${item.name}</h2>
    <h3>  ${item.price}.00</h3>
    <span class ="stock"> Stocks ${item.quantity} </span>
    <button class="box_products_add"  onclick="compraEnElCarrito(${item.id})"  id="addCarrito ${item.id}"> + </
    button>`;

    mostrador.appendChild(seccion);
  });
};

// Filtrar menu

const filtradoMenu = (nombre) => {
  if (nombre) {
    const arr = items?.filter((x) => x.name === nombre);
    addingView(arr);
  } else {
    addingView(items);
  }
};

// compra de productos

const compraEnElCarrito = (productosid) => {
  const item = items.find((prod) => prod.id === productosid);
  carritoCompras.push(item);
  spanCantidad.textContent = carritoCompras.length;
  
};

/*Scroll */
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    nav.classList.add("scroll-bg");
  } else {
    nav.classList.remove("scroll-bg");
  }
});

// Precarga
const loadPantalla = document.getElementById("load");
setTimeout(() => {
  loadPantalla.classList.add("esconderse");
}, 3000);

//Productos en la bolsa



// ----------------------------------Angel--------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  addingView(items);
});
