import React from 'react'
import img from '../../../asset/product-thumb-11.jpg'

const NewArrivedCard = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
            {[1, 2, 3, 4, 5].map(() => (
                <div className="col">
                    <div className="d-flex border shadow rounded my-3 p-4">
                        <img src={img} alt="" className="img-fluid rounded" style={{ width: "160px" }} />
                        <div className="ms-4">
                            <small className="text-muted fs-6">Amber jar</small>
                            <h3 className="brand-title fs-5">Honey Best Product for Health</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewArrivedCard
