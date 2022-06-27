import { useState, useEffect, createContext } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import axios from "axios"
const KioscoContext = createContext()

const KioscoProvider = ({ children }) => {
  const router = useRouter()
  /*================================================================
                    useStates 
    ================================================================*/
  const [categorias, setCategorias] = useState([])
  const [catActual, setCatActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [total, setTotal] = useState(0)
  const [name, setName] = useState("")
  /*================================================================
                    useEffects 
    ================================================================*/
  useEffect(() => {
    obtenerCategorias()
  }, [])
  useEffect(() => {
    setCatActual(categorias[0])
  }, [categorias])

  useEffect(() => {
    const precioFinal = pedido.reduce((total, prod) => {
      const subtotal = prod.precio * prod.cantidad

      return total + subtotal
    }, 0)
    setTotal(precioFinal)
  }, [pedido])
  /*================================================================
                   Funciones
    ================================================================*/
  const handleChangeCat = (id) => {
    const categoria = categorias.filter((c) => c.id === id)
    setCatActual(categoria[0])
    router.push("/")
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
  const handleEnviarPedido = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post("/api/ordenes", {
        total,
        name,
        pedido,
        fecha: Date.now().toString(),
      })
      //Resetear APP
      setCatActual(categorias[0])

      setPedido([])
      setTotal(0)
      setName("")

      toast.success("pedido realizado")
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } catch (error) {
      console.log(error)
    }
  }

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
        total,
        name,
        setName,
        handleEnviarPedido,
      }}
    >
      {children}
    </KioscoContext.Provider>
  )
}

export default KioscoContext
export { KioscoProvider }
