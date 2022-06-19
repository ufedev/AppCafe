import Image from "next/image"
import Categoria from "./Categoria"
import useKiosco from "../hooks/useKiosco"
const Sidebar = () => {
  const { categorias } = useKiosco()
  return (
    <div className="pt-10">
      <Image width={300} height={100} alt="imagen logo" src="/img/logo.svg" />
      <nav className="mt-10">
        {categorias.map((c) => (
          <Categoria key={c.id} categoria={c} />
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
