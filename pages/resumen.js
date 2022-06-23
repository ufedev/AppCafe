import Layout from "../layout/Layout"
import ProductoResumen from "../components/ProductoResumen"
import useKiosco from "../hooks/useKiosco"
export default function Resumen() {
  const { pedido } = useKiosco()

  return (
    <Layout pagina="Resumen">
      <div className="p-10">
        <h1 className="text-5xl font-bold">Resumen</h1>
        <p className="my-10 text-xl">Verifique su pedido a continuación</p>
      </div>

      {pedido.length <= 0 ? (
        <p className="text-3xl text-center ">No hay elementos en su pedido</p>
      ) : (
        <div>
          {pedido.map((prod) => (
            <ProductoResumen key={prod.id} prod={prod} />
          ))}
        </div>
      )}
    </Layout>
  )
}
