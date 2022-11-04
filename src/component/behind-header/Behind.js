import './Behind.css'

function Behind() {
    return(
        <div id="header1">
            <nav>
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
            </nav>

        </div>
    );
}

export default Behind;