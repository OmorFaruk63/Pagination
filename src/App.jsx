import axios from "axios"
import { useEffect, useState } from "react"
import Post from "./Post"
import Pagination from "./Pagination"


const App = () => {

  axios
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [currantPage, setCurrantPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    const fatchPost = async () => {
      setLoading(true)

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(res.data)
      setLoading(false)
    }
    fatchPost()
  }, [])

  function showPost(num) {
    console.log(num);
    setCurrantPage(num)
  }
  const indexOfLastPost = currantPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage

  const restPost = post.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div>
      <h1>My Blog</h1>
      <Post post={restPost} loading={loading} />
      <Pagination showPost={showPost}
        totalPost={post.length}
        postPerPage={postPerPage} />
    </div>
  )
}

export default App