

const Post = ({ post, loading }) => {

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <ul className="post-list">
            {post.map(list => (
                <li className="post-item" key={list.id}>
                    <p className="post-title">{list.title}</p>
                </li>
            ))}
        </ul>
    )
}

export default Post