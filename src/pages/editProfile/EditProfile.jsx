import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './editProfile.css'

const EditProfile = () => {
    const { user, dispatch } = useContext(Context);
    const [profilePhoto, setProfilePhoto] = useState(`http://localhost:5000/public/${user.photo}`);
    const [file, setFile] = useState('');
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');

    const handlePhoto = (e)=>{
        setFile(e.target.files[0])
        setProfilePhoto(URL.createObjectURL(e.target.files[0]))
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const updatedPayload = {
            name,
            email
        }
        if(password.length > 0){
            updatedPayload.password = password
        }
        if(file){
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            try {
                const upload = await axios.post('/upload', data)
                updatedPayload.photo = filename;
            }catch(err){}
        }
        try {
            const res = await axios.put(`/profile/edit/${user._id}`, updatedPayload)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.data})
        } catch (error) {
            
        }
    }
    
  return (
    <div className='editProfile'>
        <div className="editProfileHeader">
            <h1>UPDATE PROFILE</h1>
            <button>Delete Account</button>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='form-controle'>
                <input type="file" id='editProfile' style={{display: 'none'}} onChange={handlePhoto} />
                <img src={profilePhoto} />
                <label htmlFor="editProfile">
                <i className="fa-solid fa-pen-to-square"></i>    
                </label>
            </div>
            <div className='form-controle'>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-controle'>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'  />
            </div>
            <div className='form-controle'>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button>Update</button>
        </form>
    </div>
  )
}

export default EditProfile