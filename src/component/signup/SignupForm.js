import { useState } from "react";
import "./SignupForm.css";



    const SignupForm = () => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [password,setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newUser = {
            email: email,
            name: name,
            password: password,
            confirmpassword: confirmpassword,
            phone: phone,
        };
        console.log(newUser)
    };


    return(

        <section id="wrapper1">
                    <div className="App">
                        <p className="signup"> Đăng Ký </p>
                    <div id="header1" >
                        <form className="info" onSubmit={handleSubmit}>
                            <label> Họ và tên</label>
                            <input type="text" 
                            id="name" 
                            name="name" 
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Nhập tên của bạn" required/>

                            <label> Email</label>
                            <input type="email" 
                            id="email" 
                            name="email"
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Nhập email" required/>

                            <label> Mật khẩu</label>
                            <input type="Password" 
                            id="Password" 
                            name="Password"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Tạo mật khẩu" required/>

                            <label> Xác nhận mật khẩu</label>
                            <input type="Password" 
                            id="Password" 
                            name="Password"
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            placeholder="Xác nhận lại mật khẩu" required/>

                            <label> Số điện thoại</label>
                            <input type="text" 
                            id="Phone" 
                            name="Phone" 
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Nhập số điện thoại" required/>

                            <button type="submit"> Đăng Ký </button>
                        </form>
                    </div>
                </div>
            
        </section>
    );
}

export default SignupForm;