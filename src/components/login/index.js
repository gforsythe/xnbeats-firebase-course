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

  function handleSubmit(e){
    e.preventDefault();
    let name = userFormData.name;
    let lastName = userFormData.lastname;
    let password = userFormData.password;
    let email = userFormData.email;

    setLoading(true);

    if (register) {
      console.log("register this info!",userFormData);
    } else {
      console.log("login this info!",userFormData);

    }

    

  }


  function handleFormInputs(e){
    let name = e.target.name;
    let value = e.target.value;
    setUserFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }

  return (
    <>
    <div className='container login-wrapper'>
    <form className="form-signin" onSubmit={handleSubmit}>
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
                onChange={handleFormInputs}
                value={userFormData.name}
            />

            <input 
                type="text" 
                id="lastname" 
                name="lastname"
                className="form-control mb-3" 
                placeholder="Your lastname"
                onChange={handleFormInputs}
                value={userFormData.lastname}
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
        onChange={handleFormInputs}
        value={userFormData.email}
    />

    <input 
        type="password" 
        id="password" 
        name="password"
        className="form-control" 
        placeholder="Password" 
        onChange={handleFormInputs}
        value={userFormData.password}
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