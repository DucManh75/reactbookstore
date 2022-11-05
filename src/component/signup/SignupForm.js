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
                        <p className="signup"> Sign Up</p>
                    <div id="header1" >
                        <form className="info" onSubmit={handleSubmit}>
                            <label> Your Name</label>
                            <input type="text" 
                            id="name" 
                            name="name" 
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Enter your name"
                            />
                            <label> Email</label>
                            <input type="email" 
                            id="email" 
                            name="email"
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your email"
                            />
                            <label> Password</label>
                            <input type="Password" 
                            id="Password" 
                            name="Password"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter your password"
                            />
                            <label> Confirm Password</label>
                            <input type="Password" 
                            id="Password" 
                            name="Password"
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            placeholder="Confirm your password"
                            />
                            <label> Phone</label>
                            <input type="text" 
                            id="Phone" 
                            name="Phone" 
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Enter your phone number"
                            />
                            <button type="submit"> Continue </button>
                        </form>
                    </div>
                </div>
            
        </section>
    );
}

export default SignupForm;