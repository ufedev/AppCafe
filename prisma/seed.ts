import { categorias } from "./data/categorias"
import { productos } from "./data/productos"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main(): Promise<void> {
  try {
    await prisma.categorias.createMany({
      data: categorias,
    })
    await prisma.productos.createMany({
      data: productos,
    })
  } catch (error) {
    console.log(error)
  }
}

main()
