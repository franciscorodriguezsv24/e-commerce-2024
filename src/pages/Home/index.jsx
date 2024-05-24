import { useContext } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { NoSymbolIcon } from "@heroicons/react/24/solid"

function Home() {
const context = useContext(ShoppingCartContext)

const renderView = () => {
  if(context.filteredItems?.length > 0) {
    return(    
      <div className="grid grap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        context.filteredItems?.map(item =>(
        <Card key={item.id} data={item} />
      ))
      }
      </div>

    )
  } else {
    return (
      <div className="w-full flex flex-col items-center">
        <NoSymbolIcon className=" w-52 h-52"/>
        <p>We cound't find anything</p>
      </div>
    )
  }
}
  return (
    <Layout>
    <div className="flex items-center justify-center relative w-80 mb-4">
      <h1 className="font-medium text-xl">Exclusive Products</h1>
    </div>
    <input 
      type="text" 
      placeholder="Search a Product" 
      className="rounded-lg  border border-black w-80 p-4 mb-4 focus:outline-none"
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
    { 
      renderView()
    }
    <ProductDetail/>
    </Layout>
  )
}

export default Home
