

alert('Bienvenido a tu TiendaShop')
//creamos nuestra class 
class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio

  }
}
//creamos nuestros productos 
const remera = new Producto(1, 'remera', 3000, 'efectivo-debito-tarjetadecredito')
const mochila = new Producto(2, 'mochila', 6000, 'efectivo-debito-tarjetadecredito')
const gorra = new Producto(3, 'gorra', 1500, 'efectivo-debito-tarjetadecredito')


//guardamos en un array 
const productos = [remera, mochila, gorra]
console.log(productos)
//interactuamos con el usuario 
let productoEscogido = prompt('Escoge el producto que deseas comprar: remera-mochila-gorra')
// creamos variables para el while 
let seguirComprando = true
const carrito = []
// creamos el while si la repuesta es true a travez de un condicional hace una cosa y si es false hace otra 
while (seguirComprando === true) {

  const producto = productos.find(
    (producto) => producto.nombre === productoEscogido.toLowerCase().trim()
  )
 
  if (producto) {
    carrito.push(producto)
  } else {
    productoEscogido = prompt(
      'Escoge un producto correcto: remera-mochila-gorra'
    )
    continue
  }

  const elegir = prompt('desea seguir comprando: si/no')

  if (elegir === 'si') {
    productoEscogido = prompt('elige otro producto: remera-mochila-gorra')
  } else {
    seguirComprando = false
  }
}
console.log(carrito);
console.log(carrito);

//creamos las variables para trabajar con los pagos  

let totalCompra = 0
let elegir = prompt('elige forma de pago : efectivo - debito -credito')
let cuotass

//creamos un ciclo while si el usuario se equivoca con la forma de elegir el programa vuelva a preguntarle 
while (elegir !== 'efectivo' & elegir !== 'debito' & elegir !== 'credito') {
  alert('error elija una nueva forma de pago')
  elegir = prompt('efectivo - debito')
}

// un condicional anidado para resolver la funcion segun cada caso 
if (elegir === 'efectivo') {
  carrito.forEach(producto => {
    totalCompra = totalCompra + producto.precio
  })
} else if (elegir === 'debito') {
  carrito.forEach(producto => {
    totalCompra = totalCompra + producto.precio * 7 / 100 + producto.precio
  })
} else if (elegir === 'credito') {
  cuotass = parseInt(prompt('Si quiere hacerlo con tarjeta elige cantidad de ctas : 3-6-12'))
}



//variable para usar en el condicional 
let resultado

// condicional anidado segun cada caso 
if (cuotass === 3) {
  carrito.forEach(producto => {
    resultado = totalCompra + producto.precio * 12 / 100 + producto.precio
  })
} else if (cuotass === 6) {
  carrito.forEach(producto => {
    resultado = totalCompra + producto.precio * 18 / 100 + producto.precio
  })
} else if (cuotass === 12) {
  carrito.forEach(producto => {
    resultado = totalCompra + producto.precio * 24 / 100 + producto.precio
  })
}

// usamos un switch para comparar una variable con respecto a cada caso y mostrar al usuario un mensaje 
switch (elegir) {
  case 'efectivo':
    alert(`Su total a pagar es: ${totalCompra}`)
  case 'debito':
    alert(`Su total a pagar es: ${totalCompra}`)
  case 'credito':
    alert(`Su total a pagar es: ${resultado}`)
}