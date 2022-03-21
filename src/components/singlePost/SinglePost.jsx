import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './singlepost.css'

const SinglePost = ({data}) => {
    const {user} = useContext(Context)
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    useEffect(()=>{
        setTitle(data.title);
        setDesc(data.desc);
    }, [data])
    const handleUpdateProfile = async ()=>{
        try {
            const res = await axios.put(`/post/edit/${data._id}`, {title, desc, user: user.username});
            setEditMode(false)
        } catch (error) {
            
        }
    }
    const handleDelete = async ()=>{
        try {
            const res = await axios.delete(`/post/delete/${data._id}`, {data: {user: user.username}});
            window.location.href = '/'
        } catch (error) {
            
        }
    }
  return (
    <div className='singlePost'>
        {data.photo && 
            <img className='postImg' src={`http://localhost:5000/public/${data.photo}`} />
        }
        <div className='postHeader'>
            {user && user.username === data.user && <div className='postAction'>
                <i className="fa-solid fa-pen-to-square" style={{color: editMode ? "gray": "teal"}} onClick={()=> {setEditMode(true)}}></i>
                <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
            }
            {editMode ? <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/> : <h1>{title}</h1>}
            <div className='post-about'>
                <span>Author: <Link to={`/posts/?uname=${data.user}`}><b>{data.user}</b></Link></span>
                <span>{new Date(data.createdAt).toDateString()}</span>
            </div>
        </div>
        <div className='postDesc'>
            {editMode ? <textarea onChange={(e)=>{setDesc(e.target.value)}}>{desc}</textarea>: <p>{desc}</p>}
        </div>
        {editMode && 
            <button onClick={handleUpdateProfile}>update</button>
        }
    </div>
  )
}

export default SinglePost