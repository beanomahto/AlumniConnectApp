import { useEffect, useState } from 'react'
import Feed from '../components/Feed'
// import axios from 'axios';

const dummyPosts = [
  {
    _id: '1',
    user: {
      name: 'Alice Johnson',
      profilePicture: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    content: 'Excited to announce a new event happening next week!',
    tags: ['Event'],
    likes: ['u1', 'u2'],
    comments: [
      {
        user: 'u3',
        comment: 'Sounds great!',
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: '2',
    user: {
      name: 'Rahul Verma',
      profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    content: 'We’re hiring frontend developers! DM for more info.',
    tags: ['Hiring'],
    likes: [],
    comments: [],
    createdAt: new Date(),
  },
]

const FeedPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // actual API call
    // axios.get('/api/posts').then((res) => setPosts(res.data)).catch(console.error);

    setPosts(dummyPosts) // dummy data
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Recent Posts</h1>
        <Feed posts={posts} />
      </div>
    </div>
  )
}

export default FeedPage
