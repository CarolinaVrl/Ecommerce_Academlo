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
  }
];


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
bag.addEventListener("click", (cb) => {
  if (carrito.classList.contains("compras_bag")) {
    carrito.classList.remove("compras_bag");
  } else {
  }
});
closerCarrito.addEventListener("click", (cb) => {
  if (carrito.classList.contains("compras_bag")) {
    const bag = document.getElementById("bag_shop"
    )
    const carrito = document.getElementById("cart_container")
    const closerCarrito = document.getElementById("closer")
    bag.addEventListener("click", () => {
      if (carrito.classList.contains("compras_bag")) {
        carrito.classList.remove("compras_bag");
      }
      carrito.classList.add("compras_bag");
    });

  }
})
closerCarrito.addEventListener("click", () => {
  carrito.classList.add("compras_bag");
})

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

const vibrarSocial = ((item) => {
  item.target.classList.toggle("bx-tada")
})








// filtrado de productos
// const allProducts = document.getElementById("all_productos");
// const hoodie = document.getElementById("hoodies");
// const shirts = document.getElementById("shirts");
// const sweatshirt = document.getElementById("sweatshirt");

allProducts.addEventListener("click", (e) => { });
let carritoCompras = []
const mostrador = document.getElementById("mostrador");

const addingView = (arr) => {
  mostrador.innerHTML = '';

  arr?.forEach((item) => {
    const seccion = document.createElement("section")
    seccion.classList.add("box_products")
    seccion.innerHTML = `
    <img src=${item.image} alt="producto ">
    <h2>  ${item.name}</h2>
    <h3>  ${item.price}.00</h3>
    <span class ="stock"> Stocks ${item.quantity} </span>
    <button class="box_products_add"  onclick="compraEnElCarrito(${item.id})"  id="addCarrito ${item.id}"> + </
    button>`

    mostrador.appendChild(seccion)
  });
}


// Filtrar menu



const filtradoMenu = ((nombre) => {
  if (nombre) {
    const arr = items?.filter(x => x.name === nombre);
    addingView(arr);
  } else {
    addingView(items)
  }
})


// compra de productos

/*Scroll */

const nav = document.querySelector("nav");
const compraEnElCarrito = ((productosid) => {
  const item = items.find((prod) => prod.id === productosid)
  carritoCompras.push(item)
  console.log(carritoCompras)

})

window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    nav.classList.add("scroll-bg");
  } else {
    nav.classList.remove("scroll-bg");
  }
});
