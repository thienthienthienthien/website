import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <h1 className="nav-1" >
                    Quốc Thiện
                </h1>
                <div className="nav-2">
                    <h3>CHUYÊN: </h3>
                    <div>- iPhone cũ mới và các dòng Android như Samsung, Xiaomi, Redmi</div>
                    <div>- Phụ kiện Anker: Sạc dự phòng, Củ sạc, Cáp sạc...</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
