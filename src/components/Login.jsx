import React, { useState } from 'react'

const Login = () => {  
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });

    const onChangeAccount = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
    };    

    const goTomain = () => {
        fetch("http://localhost:9000/login", {
          method: 'POST',
          headers : {
            "task" : 'login'
          },
          body: JSON.stringify({
            username: account.username,
            password: account.password,
          }),
        })
        .then(res => res.json())
        .then(result => {
        if (result.message === 'Login Successful') {
          window.location.href = '../pages/home.html';
        } else {
          
        }
      });       
    };
     
    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="space-y-4">
                    <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded-md" onChange={onChangeAccount}/>
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" onChange={onChangeAccount}/>
                    <button id="login-btn" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={goTomain}>Login</button>
                    <button id="signup-btn" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">Sign Up</button>
                </div>
            </div>            
        </div>
    )
}

export default Login;