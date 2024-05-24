import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react' 
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01-05-2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside
            className={`${context.isCheckoutMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white/70`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div className='flex items-center'>
                    <XMarkIcon className="w-6 h-6 text-black cursor-pointer"
                    onClick={() => context.closeCheckoutMenu()}></XMarkIcon>.
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {context.cartProducts.map(product => (
                <OrderCard key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}/>
            ))}
            </div>
            <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className="font-light">Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
            <button onClick={() => handleCheckout()} className="w-full bg-black text-white rounded py-3 mb-6">
                Checkout
            </button>
            </Link>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu