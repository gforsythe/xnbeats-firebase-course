import React, {useState} from 'react'

function Login() {
  const [userFormData, setUserFormData] = useState({
    name:"",
    lastname:"",
    password:"",
    email: "",

  });

  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);



  function handleFormType(){
    if(register === true){
      setRegister(false);
    } 
    if(register === false){
      setRegister(true);
    }
  
  }

  return (
    <>
    <div className='container login-wrapper'>
    <form className="form-signin">
    <h1 className="h3 mb-3 font-weight-normal">
      {register ? 'Register': "Login"}
    </h1>

    {register ?    <>
            <input 
                type="text" 
                id="name" 
                name="name"
                className="form-control mb-3" 
                placeholder="Your name"
            />

            <input 
                type="text" 
                id="lastname" 
                name="lastname"
                className="form-control mb-3" 
                placeholder="Your lastname"
            />
        </>
      : null  
      
      }

    



    <input 
        type="email" 
        id="email" 
        name="email"
        className="form-control mb-3" 
        placeholder="Email address"
    />

    <input 
        type="password" 
        id="password" 
        name="password"
        className="form-control" 
        placeholder="Password" 
    />

    <br/>
    <button 
        className="btn btn-lg btn-primary btn-block" 
        type="submit"
        disabled={loading}
    >
        {register ? 'Register': "Login"}
    </button>

    <div className="mt-3">
         {register ? 'Need to sign in':'Not Registered?'} Click 
        <span  
            className="login_type_btn" 
            onClick={handleFormType}
        > here</span> to {register ? 'Login.': "Register."}
    </div>
</form>
</div>
</>
  )
}

export default Login