import Producto from "./Producto"

const Contenido = ({ categoria }) => {
  const productos = categoria?.productos ?? []

  return (
    <>
      <div className="p-10">
        <h1 className="text-5xl font-bold">{categoria?.nombre}</h1>
        <p className="my-10 text-xl">
          Elige y personaliza tu pedido a continuación
        </p>
      </div>
      <div className="grid gap-2 p-1 md:grid-cols-2 xl:grid-cols-4 w-full">
        {productos.map((prod) => (
          <Producto producto={prod} key={prod.id} />
        ))}
      </div>
    </>
  )
}

export default Contenido
