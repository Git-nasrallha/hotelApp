import React,{useState,useContext} from 'react';
import {AppContext} from "../../contextApi/AppContext"; 

const Login = (props) => {
   // const {auth}=useContext(AppContext);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
   // url="https://run.mocky.io/v3/f4c461bb-d1a0-407b-af1d-49de7c0074f1"
    const handeleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://teknosapps.com/studentsv2/clients/checklogin",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                user_email:email,
                user_password:password
            })

        }).then(response=>{
            response.json().then(result=>{
                if(result.status==='OK'){
                    localStorage.setItem('jwt',result.data);
                    props.history.push("/");
                }else{
                    localStorage.removeItem("jwt");
                }
            })
        },error=>{
            console.log(error)
            }
        );
        setEmail('');
        setPassword('');
       
       
    }
    return (
        <div className="login-page mt-4">
            <div className="container">
                <div className="row justify-content-md-center mt-4 ">
                    <div className="col-md-8">
                        <form>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email} onChange={e=>setEmail(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password} onChange={e=>setPassword(e.target.value)}
                            />
                            </div>
                            
                            <button type="submit" className="btn btn-primary" onClick={handeleSubmit} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
