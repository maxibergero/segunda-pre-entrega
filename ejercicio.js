
/*-------------ejercicio------------ */

// clase Producto
alert('bienvenido a tu tiendashop')

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio

  }
}
// creamos 4 productos
const remera = new Producto(1, 'remera', 3000, 'efectivo-debito-tarjetadecredito')
const mochila = new Producto(2, 'mochila', 6000, 'efectivo-debito-tarjetadecredito')
const gorra = new Producto(3, 'gorra', 1500, 'efectivo-debito-tarjetadecredito')


// guardar productos
const productos = [remera, mochila, gorra]
console.log(productos)

let productoEscogido = prompt('Escoge el producto que deseas comprar: remera-mochila-gorra')
// variable para condicion del ciclo
let seguirComprando = true
const carrito = []

while (seguirComprando === true) {
  // buscar el producto escogido
  const producto = productos.find(
    (producto) => producto.nombre === productoEscogido.toLowerCase().trim()
  )
  // guardar producto en carrito o preguntarle al usuario un producto existente
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

let totalCompra = 0

let elegir = prompt('elige forma de pago : efectivo - debito -credito')

let cuotass


while (elegir !== 'efectivo' & elegir !== 'debito' & elegir !== 'credito') {
  alert('error elija una nueva forma de pago')
  elegir = prompt('efectivo - debito')
}


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




let resultado

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


switch (elegir) {
  case 'efectivo':
    alert(`Su total a pagar es: ${totalCompra}`)
  case 'debito':
    alert(`Su total a pagar es: ${totalCompra}`)
  case 'credito':
    alert(`Su total a pagar es: ${resultado}`)
}