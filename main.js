/*class ProductManager {
    constructor()

    async getProduct() {


    }
}*/

import { promises as fs } from 'fs'

const path = './productos.json'

const getProducts = async () => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    console.log(prods)
}
    
const getProductById = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto) {
        console.log(producto)
    } else {
        console.log("Producto no encontrado")
    }
        
}

const addProduct = async (product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === prod.id)

    if(producto) {
        console.log("Producto ya agregado")
    } else {
        prods.push(product)
        await fs.writeFile(path, JSON.stringify(prods))
    }
}

const updateProduct = async (id, product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const indice = prods.findIndex(prod => prod.id === id)

    if (indice != -1) {
        prods [indice].nombre = product.nombre
        await fs.writeFile(path, JSON.stringify(prods))
    } else {
        console.log("Producto no encontrado")
    }
}
   
const deleteProduct = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if(producto) {
        await fs.writeFile(path, JSON.stringify(prods.filer(prod => prod.id !=id)))
    } else {
        console.log("Producto no encontrado")
    }
}

const product1 = {id: 1, nombre: "Televisor"}
const product2 = {id: 2, nombre: "Computadora"}
const product3 = {id: 3, nombre: "Smartphone"}

