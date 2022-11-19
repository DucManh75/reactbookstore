import {React, useState, useEffect} from 'react';
import './Home.css'
import Slideshow from "../slideshow/Slideshow"

function Home() {

    const [listBooks, setListBooks] = useState([])
    useEffect(() => {
        fetch('https://ducmanhapi.herokuapp.com/api/get')
        .then(data => data.json())
        .then(data => {
            setListBooks(data)
        })

    }, [])
   
        
  return (
    <>
        <div id='wrapper2'>

            <div className='headline'>
                <h3>Chương trình khuyến mại</h3>
                <Slideshow />
            </div>

            <ul className='products'>
              {listBooks.map(book => (
                <li>
                <div className='product-item'>
                    <div className='product-top'>
                    <a>
                        <img src={book.urlImg} alt="Truyện ngắn Chí Phèo"/>
                    </a>
                    </div>
                    <div className='product-info'> 
                            <a href='' className='product-name'>{book.BookName}</a>
                            <div className='product-author'>{book.AuthorName}</div>
                            <div className='product-genres'><strong>Thể loại: </strong>{book.genres}</div>
                            <div className='product-publishDate'><strong>Ngày xuất bản: </strong>{book.publishedDate}</div>
                            <div className='product-price'><strong>Giá:</strong> {book.Price}đ</div>
                            <div className='product-inventory'><strong>Đã bán: </strong>{book.Inventory}</div>
                            {/* <button className='button' type='submit'> Chi tiết</button> */}
                            <button className='btn' type='submit'> Chọn mua </button>
                    </div>
                    
                </div>    
            </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default Home;