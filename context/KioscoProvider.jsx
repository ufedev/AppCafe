import { useState, useEffect, createContext } from "react"
import { toast } from "react-toastify"

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
  const [pedido, setPedido] = useState([])

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
  const handleSetPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((p) => p.id === producto.id)) {
      setPedido(
        pedido.map((prod) => (prod.id === producto.id ? producto : prod))
      )
      toast.success("Pedido modificado Correctamente", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      setPedido([...pedido, producto])
      toast.success("Producto Agregado", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    setModal(false)
  }

  const handleEditarProdPedido = (id) => {
    const prod = pedido.find((p) => p.id === id)
    setProducto(prod)
    setModal(true)
  }
  const handleEliminarProdPedido = (id) => {
    const alerta = confirm("Desea Eliminar este producto de su lista")
    console.log(alerta)
    if (alerta) {
      const pedidoActualizado = pedido.filter((prod) => prod.id !== id)
      setPedido(pedidoActualizado)
    }
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

  /*================================================================
                    Return 
    ================================================================*/

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
        handleSetPedido,
        pedido,
        handleEditarProdPedido,
        handleEliminarProdPedido,
      }}
    >
      {children}
    </KioscoContext.Provider>
  )
}

export default KioscoContext
export { KioscoProvider }
