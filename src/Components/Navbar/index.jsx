import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const activeStyle = "underline underline-offset-4"
  const context = useContext(ShoppingCartContext)
  return(
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full ps-6 pe-6 pt-6">
      <ul className="flex items-center gap-5">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
            >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/all'
          onClick={() => context.setSearchByCategory("all")}
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/mens-clothes'
          onClick={() => context.setSearchByCategory("men's clothing")}
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Men's Clothes          
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/womens-clothes'
          onClick={() => context.setSearchByCategory("women's clothing")}
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Women's Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/electronics'
          onClick={() => context.setSearchByCategory("electronics")}
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/jewelery'
          onClick={() => context.setSearchByCategory("jewelery")}
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/others'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="text-black/60">
          Francisco@google.com
        </li>
        <li>
          <NavLink
          to='/my-orders'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/my-account'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
          to='/sign-in'
          className={({ isActive }) => 
              isActive ? activeStyle : undefined 
              }
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex gap-2">
        <ShoppingCartIcon className="size-6 text-black" /> {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar