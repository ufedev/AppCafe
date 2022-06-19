import Head from "next/head"
import Sidebar from "../components/Sidebar"

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>Chebu-San - {pagina}</title>
        <meta name="description" content={pagina} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-hidden bg-red-300">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
