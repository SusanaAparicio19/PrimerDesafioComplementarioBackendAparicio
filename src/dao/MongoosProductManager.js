import {randomUUID} from 'crypto'

import { Products } from './models/product.mongoose.js'

export class ProductManager {
  
  /* en la verificacion no esta thumbnail porque todavia no manejamos imagenes asi no se traba. Cuando las pongamos pondre la validacion*/

  async create(datosProducto) {
    datosProducto._id = randomUUID()
    const product = await Products.create(datosProducto)
    return product.toObject()
  }
  
  async getProducts() {
    return await products.find().lean()
  }

  async getProductById(id) {
    const buscada = await Products.findById(id).lean()
    if (!buscada) {
      throw new Error('id no encontrado')
    }
    return buscada
    }
  

  async updateProduct(id, updatedFields) {
    const modificada = await Products.findByIdAndUpdate(id,
      { $set: updatedFields },
      { new: true })
      .lean()

    if (!modificada) {
      throw new Error('id no encontrado')
    }
    return modificada
  }

  async deleteProduct(id) {
    const borrada = await Products.findByIdAndDelete(id).lean()
    if (!borrada) {
      throw new Error('id no encontrado')
    }
    return borrada
    }
}

