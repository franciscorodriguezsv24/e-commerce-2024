import { useContext } from "react"
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <>
        <Layout>
          <div className="flex w-80 items-center justify-center relative">
            <h1 className="font-bold text-xl">My Orders</h1>
          </div>
          {
            context.order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts}
                  />
              </Link>

            ))
          }
        </Layout>
      </>
    )
  }
  
  export default MyOrders
  