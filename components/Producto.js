import Image from "next/image"
import { formatearPrecio } from "../helpers"
const Producto = ({ producto }) => {
  return (
    <div className="p-5 border">
      <div className="mx-auto">
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
