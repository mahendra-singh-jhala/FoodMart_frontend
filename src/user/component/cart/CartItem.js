import React from 'react'
import { Button, IconButton } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md mb-6">
            <div className="d-flex align-items-center">
                <div className="w-25 h-25">
                    <img className="w-100 h-100 object-fit-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="productImg" />
                </div>

                <div className="ms-5">
                    <p className="fw-semibold">title</p>
                    <p className="opacity-70 fs-6"> name </p>
                    <div className="d-flex align-items-center text-secondary pt-2">
                        <p className="font-semibold"> ₹499 </p>
                        <p className="opacity-50 text-decoration-line-through mx-3"> ₹699 </p>
                        <p className="text-success fw-semibold"> 10% off </p>
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
                    <Button sx={{ bgcolor: "red", color: "white", marginTop: "10px", width: "120px", ":hover": { bgcolor: "#ed0000" } }}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
