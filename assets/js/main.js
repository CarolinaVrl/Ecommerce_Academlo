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
const contenedorDeCantidadProd = document.getElementById("card")

// imagen del theme
const theme = document.getElementById("theme");
const body = document.body;
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
const bag = document.getElementById("bag_shop");
const carrito = document.getElementById("cart_container");
const closerCarrito = document.getElementById("closer");
bag.addEventListener("click", () => {
  if (carrito.classList.contains("compras_bag")) {
    carrito.classList.remove("compras_bag");
  }
});
closerCarrito.addEventListener("click", () => {
  carrito.classList.add("compras_bag");
});

//social redes/ mousemove
// const facebook = document.getElementById("facebook")
// const twitter = document.getElementById("twitter")
// const instagram = document.getElementById("instagram")
// facebook.addEventListener("mousemove", ()=> {
//   facebook.classList.toggle("bx-tada");
// })
// twitter.addEventListener("mousemove", ()=>{
//   twitter.classList.toggle("bx-tada")
// })
// instagram.addEventListener("mousemove", ()=>{
//   instagram.classList.toggle("bx-tada")
// })

const vibrarSocial = (item) => {
  item.target.classList.toggle("bx-tada");
};

// filtrado de productos
let carritoCompras = [];
const mostrador = document.getElementById("mostrador");

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
  
};

<<<<<<< HEAD



const quantityProducts = (carritoCompras) =>{
  let cantidad = carritoCompras.reduce(item => item.quantity,0)
  
  return cantidad
}



const agregarNumber = document.createElement8("span")
agregarNumber.classList.add("cantidad_prod")
agregarNumber.textContent="perro"
agregarNumber.innerHTML = `


` 
contenedorDeCantidadProd.appendChild(agregarNumber)

=======
/*Scroll */
>>>>>>> 5151c699592114fd8c115469ca1ce098a6070d7d
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    nav.classList.add("scroll-bg");
  } else {
    nav.classList.remove("scroll-bg");
  }
});

// Precarga
<<<<<<< HEAD
// const loadPantalla = document.getElementById("load") 
// setTimeout(() => {
//  loadPantalla.classList.add
//  ("esconderse")
 
// }, 5000);

=======
const loadPantalla = document.getElementById("load");
setTimeout(() => {
  loadPantalla.classList.add("esconderse");
}, 6000);
>>>>>>> 5151c699592114fd8c115469ca1ce098a6070d7d

document.addEventListener("DOMContentLoaded", () => {
  addingView(items);
});
