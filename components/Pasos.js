import { useRouter } from "next/router"
import useKiosco from "../hooks/useKiosco"
const steps = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
]

const Pasos = () => {
  const router = useRouter()
  const load = () => {
    let ancho
    if (router.pathname === "/") {
      ancho = 2
    } else if (router.pathname === "/resumen") {
      ancho = 50
    } else if (router.pathname === "/total") {
      ancho = 100
    }
    return ancho
  }
  return (
    <>
      <div className="flex justify-between p-5">
        {steps.map((st) => (
          <button
            onClick={() => {
              router.push(st.url)
            }}
            className="font-bold text-xl"
            key={st.paso}
          >
            {st.nombre}
          </button>
        ))}
      </div>
      <div className="bg-slate-300 mx-5 p-0 rounded-full">
        <div
          className="bg-amber-500 h-2 rounded-full w-3"
          style={{
            width: `${load()}%`,
          }}
        ></div>
      </div>
    </>
  )
}

export default Pasos
