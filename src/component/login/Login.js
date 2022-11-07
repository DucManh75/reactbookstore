import React from 'react'
import "./Login.css"

function Login() {
  return (
   <section id='wrapper1'>
        <div id='container1'>
        <div className='form'>
                <h1 id='login'> Đăng nhập </h1>
                <form className="info">
                <label> Email </label>
            <input type="text" 
            id='Email' 
            name='Email' 
            placeholder='Nhập email' required />

            <label> Mật khẩu </label>
            <input type="password" 
            id='password'
            name='password'
            placeholder='Tạo mật khẩu' required />

            <label> Xác nhận mật khẩu </label>
            <input type="password" 
            id='password'
            name='password'
            placeholder='Xác nhận lại mật khẩu' required />

            <button type='submit'> Đăng nhập </button>
                </form>
            

            </div>
            
        </div>
        
   </section>
  )
}

export default Login