import Image from "next/image"
import { formatearPrecio } from "../helpers"
import useKiosco from "../hooks/useKiosco"
const Producto = ({ producto }) => {
  const { handleShowProd, handleSetModal } = useKiosco()
  return (
    <div
      className="p-5 border hover:cursor-pointer hover:bg-red-100"
      onClick={() => {
        handleShowProd(producto)
        handleSetModal()
      }}
    >
      <div className="flex justify-center flex-col items-center">
        <Image
          width={400}
          height={500}
          src={`/img/${producto.imagen}.jpg`}
          alt={producto.name}
        />
        <div>
          {" "}
          <h3 className="text-3xl font-black my-5">{producto.nombre}</h3>
          <p className="text-5xl text-amber-500 font-black">
            {formatearPrecio(producto.precio)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Producto
