import React from 'react'
import img from '../../../asset/product-thumb-11.jpg'

const NewArrivedCard = () => {
    return (
        <div className="row">
            <div className="col g-5">
                <div className="d-flex border shadow rounded p-4 mb-3">
                    <img src={img} alt="newProduct" className="img-fluid rounded" style={{ width: "160px" }} />
                    <div className="ms-4">
                        <small className="text-muted fs-6">Amber jar</small>
                        <h3 className="brand-title fs-5">Honey Best Product for Health</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivedCard
