import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './topbar.css'

const TopBar = () => {
  const {user, dispatch} = useContext(Context);
  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"})
  }
  return (
    <nav>
      <div className="leftSide">
        <a href="#"><i className="leftSideIcon fa-brands fa-facebook-square"></i></a>
        <a href="#"><i className="leftSideIcon fa-brands fa-instagram-square"></i></a>
        <a href="#"><i className="leftSideIcon fa-brands fa-pinterest-square"></i></a>
        <a href="#"><i className="leftSideIcon fa-brands fa-twitter-square"></i></a>
      </div>
      <div className="centerSide">
        <ul>
          <li><Link to="/">Home</Link></li>  
          <li><Link to='/write'>write</Link></li>  
          <li><Link to='/about'>about</Link></li>  
          <li><Link to='/contact'>contact</Link></li>  
        </ul>  
      </div>
      <div className="rightSide">
        {user && 
        <>
          <Link to="/edit/als45afad">
            <img className='rightSideImg' src={`http://localhost:5000/public/${user.photo}`} alt="" />
          </Link>
          <button onClick={handleLogout} style={{cursor: "pointer"}}>
            Logout
          </button>
        </>
        }
        {!user && 
          <ul>
            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
            <li>
            <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        }
        
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )
}

export default TopBar