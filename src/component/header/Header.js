import './Header.css'
import logo from './logo.png'
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
                            <a href="#" className="button Register">
                                <span className="button-text">
                                    Đăng Ký
                                </span>
                            </a>
                        </div>
                        
                        
                    </nav>
                </div>
            </div>
        </>
    )

}

export default Header;