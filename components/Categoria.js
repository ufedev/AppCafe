import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
const Categoria = ({ categoria }) => {
  const { handleChangeCat, catActual } = useKiosco()
  const { icono, id, nombre } = categoria

  return (
    <div
      onClick={() => handleChangeCat(id)}
      className={`${
        catActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 p-2 border hover:bg-amber-400 cursor-pointer select-none`}
    >
      <Image
        width={60}
        height={60}
        src={`/img/icono_${icono}.svg`}
        alt={nombre}
      />
      <p>{nombre}</p>
    </div>
  )
}

export default Categoria
