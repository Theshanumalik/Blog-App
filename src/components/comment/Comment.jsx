import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './comment.css'

const Comment = ({data}) => {
  const [userData, setUserData] = useState({})
  useEffect(()=>{
    const fetchUserInfo = async ()=>{
      const res = await axios.get(`/profile/show/${data.user}`);
      setUserData(res.data)
    }
    fetchUserInfo()
  }, [])
  return (
    <div className='comment'>
        <div className="comment-head">
            <img src={`http://localhost:5000/public/${userData.photo}`} />
            <Link to={`/posts/?uname=${data.user}`}>{`${userData.name}`}</Link>
            <p>{new Date(data.createdAt).toDateString()}</p>
        </div>
        <p className='comment-desc'>
            {data.desc}
        </p>
    </div>
  )
}

export default Comment