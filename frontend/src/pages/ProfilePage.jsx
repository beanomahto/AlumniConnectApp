import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Profile from '../components/Profile'

const dummyUser = {
  name: 'John Doe',
  email: 'john@example.com',
  batch: 2020,
  branch: 'Computer Science',
  jobTitle: 'Software Engineer',
  company: 'Google',
  location: 'California',
  bio: 'Passionate about building scalable systems.',
  profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
  tags: ['React', 'Node.js', 'MongoDB'],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
}

const ProfilePage = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // for API 
    // axios.get(`/api/users/${id}`).then((res) => setUser(res.data)).catch(console.error);

    setUser(dummyUser) // for testing
  }, [id])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Profile user={user} />
    </div>
  )
}

export default ProfilePage
