import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = ()=> {

    const dispatch = useDispatch();

    const cartItems = useSelector((store)=>store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length == 0 && <h1>Cart is empty , Please add items to the Cart!!</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
}

export default Cart;