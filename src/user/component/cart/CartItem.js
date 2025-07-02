import React from 'react'
import { Button, IconButton } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { removeCartItem } from "../../../state/cart/Action";

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item?._id));
    };

    return (
        <div className="p-4 shadow-lg border rounded-md mb-6">
            <div className="d-flex align-items-center">
                <div className="" style={{ width: "200px", height: "150px", objectFit: "cover"}}>
                    <img className="w-100 h-100 object-fit-cover" src={item.food?.imageUrl} alt="productImg" />
                </div>

                <div className="ms-5">
                    <p className="fw-semibold">{item.food?.title}</p>
                    <p className="opacity-70 fs-6"> {item?.food?.food} </p>
                    <div className="d-flex align-items-center text-secondary pt-2">
                        <p className="font-semibold"> ₹{item?.discountedPrice} </p>
                        <p className="opacity-50 text-decoration-line-through mx-3"> ₹{item?.price} </p>
                        <p className="text-success fw-semibold"> {item?.product?.discountPersent}% off </p>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <div className="d-flex align-items-center">
                    <IconButton sx={{ color: "#8a2be2" }}>
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className="py-1 px-3 mx-2 border border-2 rounded-3">
                        1
                    </span>
                    <IconButton sx={{ color: "#8a2be2" }}>
                        <AddCircleOutline />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{ bgcolor: "red", color: "white", marginTop: "10px", width: "120px", ":hover": { bgcolor: "#ed0000" } }} onClick={handleRemoveCartItem}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
