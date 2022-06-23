import useKiosco from "../hooks/useKiosco"
import { formatearPrecio } from "../helpers"
import Image from "next/image"

const ProductoResumen = ({ prod }) => {
  const { handleEliminarProdPedido, handleEditarProdPedido } = useKiosco()

  return (
    <div className="mx-5 mb-5 p-5 border flex items-center gap-5">
      <div className="w-1/5">
        <Image
          width={300}
          height={400}
          alt={`Imagen Producto ${prod.nombre}`}
          src={`/img/${prod.imagen}.jpg`}
        />
      </div>
      <div className="w-3/5 flex gap-5 flex-col">
        <h3 className="text-2xl font-bold">{prod.nombre}</h3>
        <p className="font-bold">Cantidad {prod.cantidad}</p>
        <p className="font-bold text-xl text-amber-500">
          {formatearPrecio(prod.precio)}
        </p>
        <p className="font-bold text-gray-700">
          Subtotal:{formatearPrecio(prod.cantidad * prod.precio)}
        </p>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <button
          type="button"
          className="px-5 py-2 bg-indigo-700 text-white rounded shadow-md font-bold hover:bg-indigo-600 transition-all"
          onClick={() => {
            handleEditarProdPedido(prod.id)
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-5 py-2 bg-red-700 text-white rounded shadow-md font-bold hover:bg-red-600 transition-all"
          onClick={() => {
            handleEliminarProdPedido(prod.id)
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default ProductoResumen
