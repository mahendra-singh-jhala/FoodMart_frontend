import React from 'react'
import { Button, Divider } from "@mui/material"
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div className="container my-5">
            <div className="row relative">
                <div className="col-8">
                    <CartItem />
                </div>
                <div className="col-4">
                    <div className="border p-5">
                        <p className="fw-bold opacity-70 text-secondary text-uppercase"> Price Details </p>
                        <Divider />
                        <div className="fw-semibold">
                            <div className="d-flex justify-content-between pt-3 text-black">
                                <span> Price </span>
                                <span> ₹1000 </span>
                            </div>
                            <div className="d-flex justify-content-between pt-3 text-black">
                                <span> Discount </span>
                                <span className="text-success"> -₹1000 </span>
                            </div>
                            <div className="d-flex justify-content-between py-3 text-black">
                                <span> Delivery Charges </span>
                                <span className="text-success"> Free </span>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between pt-3 text-black fw-bold">
                                <span> Total Amount </span>
                                <span className="text-success"> ₹2000 </span>
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
