import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  const categorias = await prisma.categorias.findMany({
    include: {
      productos: true, //eager loader esto aprovecha la relacion creada en el scheme de prisma par traer los datos relacionados
    },
  })

  res.status(200).json(categorias)
}
