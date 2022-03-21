import './posts.css'
import Post from '../post/Post'

const Posts = ({posts}) => {
  return (
      <div className="postContainer">
        {posts.map(p => (
          <Post key={p._id} data={p} />
        ))}
      </div>
  )
}

export default Posts