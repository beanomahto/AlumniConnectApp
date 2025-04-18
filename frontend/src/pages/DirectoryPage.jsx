import React, { useState, useEffect } from 'react'
import Directory from '../components/Directory'

const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
]

const DirectoryPage = () => {
  const [users, setUsers] = useState(dummyData)
  const [filteredUsers, setFilteredUsers] = useState(dummyData)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredUsers(result)
  }, [searchQuery, users])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Directory</h1>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        />
        <Directory users={filteredUsers} />
      </div>
    </div>
  )
}

export default DirectoryPage
