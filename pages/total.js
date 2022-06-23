import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"
import { formatearPrecio } from "../helpers"
export default function Total() {
  const { pedido } = useKiosco()
  const total = pedido.reduce((total, prod) => {
    const subtotal = prod.precio * prod.cantidad

    return total + subtotal
  }, 0)

  return (
    <Layout pagina="Total">
      <div className="p-10">
        <h1 className="text-5xl font-bold">Total del pedido</h1>
        <p className="my-10 text-xl">Confirme su Pedido a continuación</p>
      </div>
      {pedido.length <= 0 ? (
        <h3 className="text-xl font-bold text-center">
          No hay elementos en su pedido
        </h3>
      ) : (
        <div className="text-center font-bold flex flex-col gap-5 justify-center items-center">
          <h3 className="text-3xl">Total de su pedido</h3>
          <p className="text-4xl font-black text-amber-500">
            {formatearPrecio(total)}
          </p>
          <button
            type="button"
            className="text-white bg-indigo-700 px-5 py-2 mt-5 rounded"
          >
            Enviar Pedido
          </button>
        </div>
      )}
    </Layout>
  )
}
