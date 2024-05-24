import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="w-6 h-6 text-black"></CheckIcon>
                </div>
            )

        } else {
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={(event) =>  addProductsToCart(event, data.data)}>
                    <PlusIcon className="w-6 h-6 text-black"></PlusIcon>
                </div>
            )
        }
    }

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm px-2 m-2">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="headphones"/>
                {renderIcon(data.data.id)}
            </figure>
            <figure>
                <p className="flex justify-between">
                    <span className="text-sm font-light truncate">{data.data.title}</span>
                    <span className="text-lg font-bold">${data.data.price}</span>
                </p>
            </figure>
        </div>
    )
}

export default Card