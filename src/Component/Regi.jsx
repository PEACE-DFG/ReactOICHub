import { useState } from "react"
import {useNavigate} from 'react-router-dom'
function Regi() {
 const navigate=useNavigate()
  const [user,setUser]=useState({
    Name:'',
    Email:'',
    Password:'',
    Repeatpassword:''
  })
  const [errors,setErrors]=useState({});

  const submitData = (e)=>{
    e.preventDefault();
    const newErrors={};
    //conditionals for validation
    if(user.Name.trim()=== ''){
      newErrors.NameErr='Your Name is Required'
    }
    if(user.Email.trim()===''){
      newErrors.EmailErr="Your Email is Required"
    }
    if(user.Password.trim()===''){
      newErrors.PasswordErr="Your Password is Required"
    }
    if(user.Repeatpassword.trim()===''){
      newErrors.RepeatpasswordErr="Your Password is Required"
    }else if(user.Password.trim()!== user.Repeatpassword.trim()){
      newErrors.RepeatpasswordErr="Your Passwords do not match"
    }
  setErrors(newErrors);
  if(Object.keys(newErrors).length===0){
    const users=JSON.parse(localStorage.getItem('users'))||[];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users))
    navigate('/login')
  }


  }
  return (
    <div>
    <section className=' container mt-5'>
<form action=""  className='rew' onSubmit={submitData} >
<div className='rod mt-5' style={{maxWidth:'400px',margin:'auto'}}>
<div className='roo text-center'>
<h1 className='text-center text-dark'>
    Register  
</h1>
</div>
       <div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingInput" placeholder="Name"
       onChange={(e)=>{
        setUser({...user, Name:e.target.value})
       }}
    
       />
       <label htmlFor="floatingInput" name="Name">Name</label>
       {errors.NameErr && <span style={{ color:'red' }}>{errors.NameErr}</span>}
       </div>
       <div className="form-floating my-3">
            <input type="email" className="form-control" id="floatingPassword" placeholder="Email"
             onChange={(e)=>{
              setUser({...user, Email:e.target.value})
             }}
            /> 
             <label htmlFor="floatingPassword" name='Email'>Email</label>
             {errors.EmailErr && <span style={{ color:'red' }}>{errors.EmailErr}</span>}

             </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={(e)=>{
                setUser({...user, Password:e.target.value})
               }}
            />
             
             <label htmlFor="floatingPassword" name='Password'>Password</label>
             {errors.PasswordErr && <span style={{ color:'red' }}>{errors.PasswordErr}</span>}

             </div>
             <div className="form-floating mt-3">
             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={(e)=>{
                setUser({...user, Repeatpassword:e.target.value})
               }}
             />
             <label htmlFor="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
       {errors.RepeatpasswordErr && <span style={{ color:'red' }}>{errors.RepeatpasswordErr}</span>}

             </div> 
          <div className="col-12 text-center">
          <button className="btn btn-success my-3"  type="submit">Register</button>
          </div>
          </div>
          </form>
          </section>
          </div>    
  )
}

export default Regi