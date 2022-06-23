import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import { formatearPrecio } from "../helpers"
import { useState, useEffect } from "react"
const ModalProducto = ({ producto }) => {
  const { pedido, handleSetModal, handleSetPedido } = useKiosco()
  const [cantidad, setCantidad] = useState(1)
  const [editar, setEditar] = useState(false)

  useEffect(() => {
    if (pedido.some((prod) => prod.id === producto.id)) {
      setEditar(true)
      setCantidad(pedido.find((prod) => prod.id === producto.id).cantidad)
    }
  }, [pedido, producto])

  /*================================================================
                    Return
    ================================================================*/
  return (
    <>
      <div className="md:flex gap-5 w-128 ">
        <div className="md:w-1/3 ">
          <Image
            width={400}
            height={500}
            alt={`ìmagen de ${producto.nombre}`}
            src={`/img/${producto.imagen}.jpg`}
          />
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-end hover:text-red-800">
            <button onClick={handleSetModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-10">{producto.nombre}</h1>
          <p className="text-6xl font-black text-amber-500">
            {formatearPrecio(producto.precio)}
          </p>
          <div className="flex gap-4 mt-5">
            <button
              type="button"
              onClick={() => {
                if (cantidad <= 1) return
                setCantidad(cantidad - 1)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-3xl font-bold">{cantidad}</p>
            <button
              type="button"
              onClick={() => {
                if (cantidad > 5) return
                setCantidad(cantidad + 1)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => {
              handleSetPedido({ ...producto, cantidad })
            }}
            className="bg-indigo-600 uppercase text-white p-5 mt-5 rounded-lg hover:bg-indigo-500 font-bold"
          >
            {editar ? "Editar Pedido" : "Agregar al Pedido"}
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalProducto
