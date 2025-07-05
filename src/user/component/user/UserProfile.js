import React from 'react'
import { Avatar } from '@mui/material'

const UserProfile = () => {
    return (
        <div className="w-50 d-flex justify-content-between align-items-center py-5 mx-auto">
            <div className="w-100 bg-secondary-subtle rounded-4 shadow p-4">
                <div className="my-4 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ marginRight: "20px", width: "80px", height: "80px" }} />
                        <div>
                            <h2 >Mahendra</h2>
                        </div>
                    </div>
                    <button className="btn btn-primary px-4 py-2">
                        Edit Profile
                    </button>
                </div>
                <div className="my-2">
                    <div className="my-3">
                        <label className="form-label fw-semibold">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="form-control form-control-lg fs-6"
                            readOnly
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label fw-semibold">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form-control form-control-lg fs-6"
                            readOnly
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label fw-semibold">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control form-control-lg fs-6"
                            readOnly
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control form-control-lg fs-6"
                            readOnly
                        />
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary">
                            Change password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
