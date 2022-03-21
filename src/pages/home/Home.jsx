import { useEffect, useState } from 'react'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
const Home = () => {
  const [posts, setPosts] = useState([])
  const [searchParams] = useSearchParams();
  const uname = searchParams.get('uname');
  const cat = searchParams.get('cat');
  useEffect(() => {
    const fetchApi = async ()=>{
            if(uname){
              try {
                const res = await axios.get(`/post/?username=${uname}`);
                setPosts(res.data)
                } catch (error) {
                  console.log(error)
              }
            }
            else if (cat) {
              try {
                const res = await axios.get(`/post/?cat=${cat}`);
                setPosts(res.data)
                } catch (error) {
                  console.log(error)
              }
            } 
            else{
              try {
              const res = await axios.get('/post');
              setPosts(res.data)
              } catch (error) {
                console.log(error)
            }
          }
        }
    fetchApi()
  }, [uname, cat])
  
  return (
    <>
        <header>
            <div className="siteTitle">
                <span>Digitel Ocean of knowledge</span>   
                <span style={{fontSize: '40px'}}>React &#38; Node</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/11/11/21/55/freedom-2940655_960_720.jpg" alt="" />
        </header>
        <section>
            <Posts posts={posts}/>
            <SideBar/>
        </section>
    </>
  )
}

export default Home