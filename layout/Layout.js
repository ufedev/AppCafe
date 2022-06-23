import Modal from "react-modal"
import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Pasos from "../components/Pasos"
import ModalProducto from "../components/ModalProducto"
import useKiosco from "../hooks/useKiosco"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
Modal.setAppElement("#__next")
const Layout = ({ children, pagina }) => {
  const { modal, handleSetModal, producto } = useKiosco()

  return (
    <>
      <Head>
        <title>{`Chebu-San - ${pagina}`}</title>
        <meta name="description" content="" />
      </Head>
      <div className="flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-hidden bg-red-300">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <Pasos />
          {children}
        </main>
      </div>

      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
          onRequestClose={handleSetModal}
        >
          <ModalProducto producto={producto} />
        </Modal>
      )}
      <ToastContainer />
    </>
  )
}

Layout.defaultProps = {
  pagina: "",
}

export default Layout
