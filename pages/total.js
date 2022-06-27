import { useEffect, useCallback } from "react"
import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"
import { formatearPrecio } from "../helpers"
export default function Total() {
  const { pedido, total, name, handleEnviarPedido, setName } = useKiosco()
  const comprobarPedido = useCallback(() => {
    return pedido.length > 0 && name !== "" && name.length >= 3
  }, [pedido, name])

  useEffect(() => {
    comprobarPedido()
  }, [name, pedido, comprobarPedido])
  return (
    <Layout pagina="Total">
      <div className="p-10">
        <h1 className="text-5xl font-bold">Total del pedido</h1>
        <p className="my-10 text-xl">Confirme su Pedido a continuación</p>
      </div>

      <form onSubmit={handleEnviarPedido}>
        <div className="p-5">
          <div>
            <label
              htmlFor="nombre"
              className="font-bold uppercase text-xl block "
            >
              Nombre:
            </label>

            <input
              className="bg-slate-300 w-full lg:w-1/3 py-2 px-5 rounded my-5"
              type="text"
              name="nombre"
              id="nombre"
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
            />
          </div>
          {comprobarPedido() && (
            <>
              <p className="text-2xl">Total de su pedido</p>
              <p className="text-4xl font-black text-amber-500">
                {formatearPrecio(total)}
              </p>
            </>
          )}
          <input
            type="submit"
            className={`text-white px-5 py-2 mt-5 rounded ${
              !comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-700 hover:bg-indigo-600 cursor-pointer"
            }`}
            value="Enviar Pedido"
          />
        </div>
      </form>
    </Layout>
  )
}
