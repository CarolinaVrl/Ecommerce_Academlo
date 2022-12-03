const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  // imagen del theme
const theme = document.getElementById("theme")
const body = document.body
const darthemechange = () => {
  body.classList.toggle("dark")
   if (theme.classList.contains("bx-sun")){
    theme.classList.replace("bx-sun", "bx-moon")
   }else{ theme.classList.replace("bx-moon", "bx-sun")

  }

}
theme.addEventListener("click", e =>darthemechange ())


  


