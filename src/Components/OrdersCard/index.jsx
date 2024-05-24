import { ShoppingBagIcon, ChevronRightIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg py-5 px-3 w-50 mt-6">
        <p className="flex flex-row items-center gap-6">
            <span className="flex flex-col items-start">
                <span className="flex gap-2 font-light text-xl">
                <CalendarDaysIcon className="w-6 h-6 text-black"/>
                09-05-2024</span>
                <span className="flex gap-2 justify-center">
                <ShoppingBagIcon className="w-6 h-6 text-black"/>
                {totalProducts}
                </span>
            </span>
            
            <span className="font-medium text-2xl flex items-center gap-3">
            ${totalPrice}
            <ChevronRightIcon className="w-6 h-6 text-black"/>
            </span>
        </p>
        </div>
    )
}

export default OrdersCard