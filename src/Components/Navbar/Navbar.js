import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-1" >
                    Quốc Thiện
                </div>
                <div>
                    <ul>
                        <li className="li-1">Zalo: 0975.71.3834</li>
                        <br />
                        <li className="li-2">Telegram: 0975.71.3834 hoặc <a href="https://t.me/thieniphonebd">Bấm vào đây</a></li>
                        <br />
                        <li className="li-3">Facebook: <a href="https://www.facebook.com/profile.php?id=100011327206755">Bấm vào đây</a></li>
                    </ul>
                </div>
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
