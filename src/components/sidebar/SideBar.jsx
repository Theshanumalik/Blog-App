import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const [cats, setCats] = useState([])
    useEffect(()=>{
        const fetchCats = async ()=>{
            const res = await axios.get('/cat');
            setCats(res.data.data)
        }
        fetchCats()
    }, [])
  return (
    <aside>
        <div className="about-me">
            <span className="title">
                About US
            </span>
            <img src="https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut molestias illum, distinctio a quas sint commodi vel nostrum consequuntur?</p>
        </div>
        {cats && 
            <div className='catagories'>
                <span className='title'>
                    Catagories
                </span>
                <ul>
                    {cats.map((c)=>(
                        <li key={c._id}><Link to={`/posts/?cat=${c.name}`}>{c.name}</Link></li>
                    ))}
                </ul>
            </div>
        }
        <div className="follow-us">
            <span className='title'>
                Follow us
            </span>   
            <div className='socialLinks'>
                <a href="#"><i className="leftSideIcon fa-brands fa-facebook-square"></i></a>
                <a href="#"><i className="leftSideIcon fa-brands fa-instagram-square"></i></a>
                <a href="#"><i className="leftSideIcon fa-brands fa-pinterest-square"></i></a>
                <a href="#"><i className="leftSideIcon fa-brands fa-twitter-square"></i></a>
            </div> 
        </div>
    </aside>
  )
}

export default Sidebar