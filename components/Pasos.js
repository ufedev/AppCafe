import { useRouter } from "next/router"
const steps = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
]

const Pasos = () => {
  const router = useRouter()
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
        <div className="bg-amber-500 h-2 rounded-full w-3"></div>
      </div>
    </>
  )
}

export default Pasos
