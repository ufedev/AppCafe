import { useState, useEffect, createContext } from "react"
import axios from "axios"
const KioscoContext = createContext()

const KioscoProvider = ({ children }) => {
  /*================================================================
                    useStates 
    ================================================================*/
  const [categorias, setCategorias] = useState([])
  const [catActual, setCatActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  /*================================================================
                   Funciones
    ================================================================*/
  const handleChangeCat = (id) => {
    const categoria = categorias.filter((c) => c.id === id)
    setCatActual(categoria[0])
  }
  const handleShowProd = (prod) => {
    setProducto(prod)
  }
  const handleSetModal = () => {
    setModal(!modal)
  }
  /*================================================================
                   Async Funciones
    ================================================================*/
  async function obtenerCategorias() {
    const { data } = await axios("/api/categorias")
    setCategorias(data)
  }

  /*================================================================
                    useEffects 
    ================================================================*/
  useEffect(() => {
    obtenerCategorias()
  }, [])
  useEffect(() => {
    setCatActual(categorias[0])
  }, [categorias])
  return (
    <KioscoContext.Provider
      value={{
        categorias,
        handleChangeCat,
        catActual,
        producto,
        handleShowProd,
        modal,
        handleSetModal,
      }}
    >
      {children}
    </KioscoContext.Provider>
  )
}

export default KioscoContext
export { KioscoProvider }
