import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //Shopping cart
    const [count, setCount] = useState(0)

    //ProductDetail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product detail 

    const [productToShow, setProductToShow] = useState({})

    //Shoppi cart . add product to cart
    const [cartProducts, setCartProducts] = useState([])
    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);
    //Orders
    const [order, setOrder] = useState([])

    //searchBar filter
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=30')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredByItemsTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
    }

    const filteredByItemsCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()) )
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType == 'BY_TITLE'){
            return filteredByItemsTitle(items, searchByTitle) 
        }

        if(searchType == 'BY_CATEGORY') {
            return filteredByItemsCategory(items, searchByCategory)
        }

        if(searchType == 'BY_TITLE_AND_CATEGORY') {
            return filteredByItemsCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
        }

        if(!searchType){
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory === "all") setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        if(searchByTitle && searchByCategory === "all") setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

    }, [items, searchByTitle, searchByCategory])

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            setSearchByCategory,
            searchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

