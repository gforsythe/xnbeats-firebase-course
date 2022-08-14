import React, {useState} from 'react'
import {registerUser, loginUser} from '../../store/actions';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function Login(props) {
  const [userFormData, setUserFormData] = useState({
    name:"",
    lastname:"",
    password:"",
    email: "",

  });
  const navigate = useNavigate()
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
    

    setLoading(true);

    if (register) {
      props.dispatch(registerUser(userFormData)).then(
        ({payload}) => handleRedirection(payload))

      console.log("register this info!",userFormData);
    } else {
      props.dispatch(loginUser(userFormData)).then(
        ({payload}) => handleRedirection(payload))
      console.log("login this info!",userFormData);

    }

    function handleRedirection(result){
     if (result.error) {
      setLoading(false);
      toast.error(result.error,{
        position: toast.POSITION.BOTTOM_CENTER,
      });
     } else {

       return navigate( '/dashboard'); 
     }

      
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
const mapStateToProps = state => ({
  auth:state.auth
})
export default connect(mapStateToProps)(Login)