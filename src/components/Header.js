import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UseSelector, useSelector } from "react-redux";

const Header = () =>{
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="w-56 p-4 m-4">
                <img className="logo w-[100px] h-[100px]" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4">
                        Online status: {onlineStatus? '✅' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                       <Link to="cart">Cart ({cartItems.length} Items)</Link>
                    </li>
                    <button className="login" onClick ={()=>{
                        btnNameReact == 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;