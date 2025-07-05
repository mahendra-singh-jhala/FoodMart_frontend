import React from 'react';
import { Button, IconButton } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";

const CartItem = () => {
    const cartItems = useSelector((state) => state.cart.cart?.cartItem || []);
    const dispatch = useDispatch();

    const handleUpdateCartItem = (itemId, currentQty, qty) => {
        const newQuantity = currentQty + qty;
        if (newQuantity > 0) {
            dispatch(updateCartItem(itemId, newQuantity));
        }
    };

    const handleRemoveCartItem = (itemId) => {
        dispatch(removeCartItem(itemId));
    };

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item._id} className="p-4 shadow-lg border rounded-md mb-6">
                    <div className="d-flex align-items-center">
                        <div style={{ width: "200px", height: "150px", objectFit: "cover" }}>
                            <img className="w-100 h-100 object-fit-cover" src={item.food?.imageUrl} alt="foodImg"/>
                        </div>
                        <div className="ms-5">
                            <p className="fw-semibold">{item.food?.title}</p>
                            <p className="opacity-70 fs-6">{item.food?.food}</p>
                            <div className="d-flex align-items-center text-secondary pt-2">
                                <p className="font-semibold">₹{item.discountedPrice}</p>
                                <p className="opacity-50 text-decoration-line-through mx-3">₹{item.price}</p>
                                <p className="text-success fw-semibold">
                                    {item.food?.discountPersent || 0}% off
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="d-flex align-items-center">
                            <IconButton sx={{ color: "#8a2be2" }} onClick={() => handleUpdateCartItem(item._id, item.quantity, -1)} disabled={item.quantity <= 1}>
                                <RemoveCircleOutline />
                            </IconButton>
                            <span className="py-1 px-3 mx-2 border border-2 rounded-3">
                                {item.quantity}
                            </span>
                            <IconButton sx={{ color: "#8a2be2" }} onClick={() => handleUpdateCartItem(item._id, item.quantity, 1)}>
                                <AddCircleOutline />
                            </IconButton>
                        </div>
                        <div>
                            <Button
                                sx={{
                                    bgcolor: "red",
                                    color: "white",
                                    marginTop: "10px",
                                    width: "120px",
                                    ":hover": { bgcolor: "#ed0000" },
                                }}
                                onClick={() => handleRemoveCartItem(item._id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;