import React from 'react';
import chipheo from "./img/chipheo.jpg"
import laohac from "./img/laohac.jpg"
import tatden from "./img/tatden.jpg"
import truyenkieu from "./img/truyenkieu.png"
import nhatkitrongtu from "./img/nhatkitrongtu.jpg"

import './Home.css'


function Home() {
  return (
    <>
        <div id='wrapper2'>
            <div className='headline'>
                <h3>Sản phẩm bán chạy</h3>
            </div>
            <ul className='products'>
              <li>
                  <div className='product-item'>
                      <div className='product-top'>
                      <a href="" id="truyen">
                          <img src={chipheo} alt="Truyện ngắn Chí Phèo"/>
                      </a>
                      </div>
                      <div className='product-info'> 
                            <a href='' className='product-name'>Truyện ngắn Chí Phèo</a>
                            <div className='product-author'>Nam Cao</div>
                            <div className='product-price'> 87.000 đ</div>
                      </div>
                      <button className='btn' type='submit'> Chọn mua </button>
                  </div>
              </li>
              <li>
                  <div className='product-item'>
                      <div className='product-top'>
                      <a href="" id="truyen">
                          <img src={laohac} alt="Truyện ngắn Lão Hạc"/>
                      </a>
                      </div>
                      <div className='product-info'> 
                            <a href='' className='product-name'>Truyện ngắn Lão Hạc</a>
                            <div className='product-author'>Nam Cao</div>
                            <div className='product-price'> 87.000 đ</div>
                      </div>
                      <button className='btn' type='submit'> Chọn mua </button>
                  </div>
              </li>
              <li>
                  <div className='product-item'>
                      <div className='product-top'>
                      <a href="" id="truyen">
                          <img src={truyenkieu} alt="Truyện Kiều"/>
                      </a>
                      </div>
                      <div className='product-info'> 
                            <a href='' className='product-name'>Truyện Kiều</a>
                            <div className='product-author'>Nguyễn Du</div>
                            <div className='product-price'> 125.000 đ</div>
                      </div>
                      <button className='btn' type='submit'> Chọn mua </button>
                  </div>
              </li>
              <li>
                  <div className='product-item'>
                      <div className='product-top'>
                      <a href="" id="truyen">
                          <img src={tatden} alt="Truyện ngắn Chí Phèo"/>
                      </a>
                      </div>
                      <div className='product-info'> 
                            <a href='' className='product-name'>Tắt đèn</a>
                            <div className='product-author'>Ngô Tất Tố</div>
                            <div className='product-price'> 83.000 đ</div>
                      </div>
                      <button className='btn' type='submit'> Chọn mua </button>
                  </div>
              </li>
              <li>
                  <div className='product-item'>
                      <div className='product-top'>
                      <a href="" id="truyen">
                          <img src={nhatkitrongtu} alt="Nhật ký trong tù"/>
                      </a>
                      </div>
                      <div className='product-info'> 
                            <a href='' className='product-name'>Nhật ký trong tù</a>
                            <div className='product-author'>Hồ Chí Minh</div>
                            <div className='product-price'> 245.000 vnd</div>
                      </div>
                      <button className='btn' type='submit'> Chọn mua </button>
                  </div>
              </li>

            </ul>
        </div>
    </>
  )
}

export default Home