import { Link } from 'react-router-dom'
import './post.css'

const Post = ({ data }) => {
  return (
    <div className="postCard">
      {data.photo &&
        <img src={`http://localhost:5000/public/${data.photo}`} />
      }
        <div className="postInfo">
          {data.catagory && 
            <span className='postCat'>
              <Link to={`/posts/?cat=${data.catagory}`}>{data.catagory}</Link>
            </span>
          }
            <span className='postTitle'>
              <Link to={`/post/${data._id}`}>{data.title}</Link>
            </span>
            <span className='postDate'>
              {(new Date(data.createdAt)).toDateString()}
            </span>
        </div>
        <p>{data.desc}</p>
    </div>
  )
}

export default Post