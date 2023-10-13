import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Log() {

  const navigate=useNavigate()
  const [user,setUser]=useState({
    email:'',
    password:''
  });
  const [errors,setErrors]=useState('');

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser((prevUser)=>({
      ...prevUser,
      [name]:value
    }));
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('users')){
      const users=JSON.parse(localStorage.getItem('users'));
      const matchedUser=users.find(
      (u)=>u.Email=== user.email && u.Password=== user.password
      );
      if(matchedUser){
        alert("succesful login")
        navigate('/')
      }
      else{
        setErrors("Invalid details")
      }
    }
    else{
      setErrors('You have not yet registered , Please do first');
      navigate('/register')
    
    }
  }

 

  return (
    <div>
        <section className="container mt-5">
        <form className="row mt-5" onSubmit={handlesubmit} >
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" name="email" value={user.email}  onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password"  value={user.password} onChange={handleChange} />
                </div>
                {/* errors to display here */}
                {errors && <div className="alert alert-danger">{errors}</div>}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="text-center mt-3">
                  {/* <p>Don't have an account? <Link to="/Registers" className='text-success'>Register here</Link></p> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Log