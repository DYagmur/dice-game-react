import React, { useState } from 'react'

export function Login () {  
    const [account, setAccount] = useState({
        username: "",
        nickname:"",
        password: "",
        balance: "",
        ticket: "",
    });

    const onChangeAccount = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
    };    

    const changeAccountInfo = (key, value) => {
      setAccount((current) => {
          let newCondition = { ...current };
          newCondition[key] = value;
          return newCondition;
      });
  };

    const tryLogin = () => {
        fetch("http://localhost:8000/login", {
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
          console.log(result);
          getUserData();
        } else {
          
        }
      });       
    };
     
    const getUserData = () => {
      fetch("http://localhost:8000/getUserData",{
        method: 'GET',
        headers : {
          "task" : 'getUserData'
        },
      })
      .then(res => res.json())
      .then(result => {
        changeAccountInfo('nickname', result.currentUser.nickname);
        changeAccountInfo('balance', result.currentUser.balance);
        changeAccountInfo('ticket', result.currentUser.ticket);
        
      })
    };

    return (
        <div id="loginBox" className="bg-gray-100 pl-80 pt-12 h-screen items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="space-y-4">
                    <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded-md" onChange={onChangeAccount}/>
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" onChange={onChangeAccount}/>
                    <button id="login-btn" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={tryLogin}>Login</button>
                    <button id="signup-btn" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">Sign Up</button>
                </div>
            </div>
            <p>Hello, {account.nickname}!</p><br />
            <p>Your Balance is $ {account.balance}</p><br />
            <p>And Your number of ticket is {account.ticket}</p>            
        </div>
    )
}

export default Login;