import axios from "axios";
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"

const Login = () => {
    const {dispatch, user, isFetching} = useContext(Context)
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post('/auth/login', {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})

        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-controle">
                <input type="text" placeholder="Username" ref={usernameRef} />    
            </div>
            <div className="form-controle">
                <input type="password" placeholder="Password" ref={passwordRef} />    
            </div>
            <button type="submit" 
                disabled={isFetching}
            >Login</button>
        </form>
        <div className="registerLink">
            <p>Don't have any account? <Link to="/register">Register now</Link></p>
        </div>    
    </div>
  )
}

export default Login