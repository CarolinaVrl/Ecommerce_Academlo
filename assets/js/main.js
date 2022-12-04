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
const bag =document.getElementById("bag_shop"
)
const carrito = document.getElementById("cart_container")
const closerCarrito = document.getElementById("closer")
bag.addEventListener("click", cb=>{
  if (carrito.classList.contains("compras_bag")){
    carrito.classList.remove("compras_bag")
  }else{
    
  }
})
closerCarrito.addEventListener("click", cb =>{
  if (carrito.classList.contains("compras_bag")){
    
  }carrito.classList.add("compras_bag")
})

//social redes/ mousemove
const facebook = document.getElementById("facebook")
const twitter = document.getElementById("twitter")
const instagram = document.getElementById("instagram")
facebook.addEventListener("mousemove", e=>{
  facebook.classList.toggle("bx-tada")
})
twitter.addEventListener("mousemove", e=>{
  twitter.classList.toggle("bx-tada")
})
instagram.addEventListener("mousemove", e=>{
  instagram.classList.toggle("bx-tada")
})






// filtrado de productos
const allProducts = document.getElementById("all_productos")
const hoodie = document.getElementById("hoodies")
const shirts = document.getElementById("shirts")
const sweatshirt = document.getElementById("sweatshirt")

allProducts.addEventListener("click", e =>{
  
})

