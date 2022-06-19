import Layout from "../layout/Layout"
import useKiosco from "../hooks/useKiosco"
import Contenido from "../components/Contenido"
export default function Home() {
  const { catActual } = useKiosco()
  return (
    <>
      <Layout pagina={catActual?.nombre}>
        <Contenido categoria={catActual} />
      </Layout>
    </>
  )
}
