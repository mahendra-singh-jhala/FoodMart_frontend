import React, { useEffect } from 'react'
import { Button, Divider } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import CartItem from './CartItem'
import { getCart } from '../../../state/cart/Action'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const cartItems = cart?.cartItem

    // useEffect to fetch cart data
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <div className="container my-5">
            <div className="row relative">
                <div className="col-8">
                    {cartItems?.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                </div>
                <div className="col-4">
                    <div className="border p-5">
                        <p className="fw-bold opacity-70 text-secondary text-uppercase"> Price Details </p>
                        <Divider />
                        <div className="fw-semibold">
                            <div className="d-flex justify-content-between pt-3 text-black">
                                <span> Price </span>
                                <span> ₹{cart?.totalPrice} </span>
                            </div>
                            <div className="d-flex justify-content-between pt-3 text-black">
                                <span> Discount </span>
                                <span className="text-success"> -₹{cart?.discount} </span>
                            </div>
                            <div className="d-flex justify-content-between py-3 text-black">
                                <span> Delivery Charges </span>
                                <span className="text-success"> Free </span>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between pt-3 text-black fw-bold">
                                <span> Total Amount </span>
                                <span className="text-success"> ₹{cart?.totalDiscountPrice} </span>
                            </div>
                        </div>
                        <Button variant="contained" sx={{ bgcolor: "blueviolet", mt: "20px", width: "100%" }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
