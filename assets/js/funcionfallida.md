
  
  const imgProd = compras.image
  // imgProd.classList.add("cart-img")
  const detalles = document.createElement("div")
  detalles.classList.add("cart-details")
  const titleProd = document.createElement("h3")
  titleProd.classList.add("cart-title")
  titleProd.textContent =  `${compras.name} ` 
  const spanStock = document.createElement("span") 
  spanStock.classList.add("cart-stock")
  spanStock.textContent = `${compras.quantity}`
  const spanPrice = document.createElement("span") 
  spanPrice.classList.add("cart-price")
  spanPrice.textContent = `${compras.price}`
  const spanSubtotal = document.createElement("span")
  spanSubtotal.classList.add("cart-subtotal") 
  spanSubtotal.textContent = `suma de valor productos por item`
  const amoutContent = document.createElement("div")
  amoutContent.classList.add("cart-amount-content")
  amoutContent.textContent = `cantidad del mismo item`
  const minus = document.createElement("i")
  minus.classList.add("bx-minus")
  const spanUnits = document.createElement("span")
  spanUnits.classList.add("cart-amount-number")
  spanUnits.textContent = `cantidad de unidades del mismo item`
  const plus = document.createElement("i")
  plus.classList.add("bx-plus")
  const trash = document.createElement("i")
  trash.classList.add("bx-trash-alt")
  contenedorCompra.appendChild(tarjeta)
  tarjeta.prepend(titleProd)
  tarjeta.appendChild(imgProd)
  tarjeta.appendChild(detalles)
  detalles.appendChild(spanStock)
  detalles.appendChild(spanPrice)