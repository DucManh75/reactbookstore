import './Header.css'
import logo from './logo.png'
import { NavLink } from "react-router-dom"


function Header() {
    return (
        <>
            <div id="wrapper">
                <div id="header">
                    <nav className="container">
                        <div>
                        <a href="" id="logo">
                            <img src={logo} alt="Logo"/>
                        </a>
                        </div>

                        <ul id="main-menu">
                            <li><a href="">Hot</a></li>
                            <li><a href="">Thể loại</a>
                                <ul className="sub-menu">
                                    <li><a href="">Ngôn Tình</a></li>
                                    <li><a href="">Hành động</a></li>
                                    <li><a href="">Trinh thám</a>
                                    <ul className="sub-menu">
                                        <li><a href="">Kinh dị</a></li>
                                        <li><a href="">Hồi tưởng</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="">Tình cảm</a></li>
                                    <li><a href="">Hư cấu</a></li>
                                </ul>
                            </li>
                            <li><a href="">Lịch sử</a></li>
                            <li><a href="">Ngày xuất bản</a></li>
                            <li><a href="">Theo dõi</a></li>
                        </ul>


                        <div className="search-box">
                                    <input type="text" className="search-txt" placeholder="Tìm truyện ......"/>
                                    <a href="#" className="search-btn">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                
                        </div>

                        
                        <div className='comment'>
                        <a href="@">
                            <i className="fa-solid fa-comment"/>
                        </a>
                        </div>

                        <div className="list-button">
                            <a href="#" className="button Login">
                                <span className="button-text">
                                    Đăng Nhập
                                </span>
                            </a>
                            <NavLink to="/signup" className="button Register">
                                    Đăng Ký
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )

}

export default Header;