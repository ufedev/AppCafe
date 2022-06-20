import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import { formatearPrecio } from "../helpers"
const ModalProducto = ({ producto }) => {
  const { handleSetModal } = useKiosco()
  return (
    <>
      <div className="md:flex gap-5 ">
        <div className="md:w-1/3">
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
                className="h-6 w-6"
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
        </div>
      </div>
    </>
  )
}

export default ModalProducto
