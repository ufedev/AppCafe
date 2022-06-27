import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  if (req.method === "POST") {
    const resultado = await prisma.ordenes.create({
      data: {
        nombre: req.body.name,
        fecha: req.body.fecha,
        total: req.body.total,
        pedido: req.body.pedido,
      },
    })

    res.status(200).json("agregado")
  }
}
