import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import type { NextComponentType } from 'next'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

const Posts: NextComponentType = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot: any) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
