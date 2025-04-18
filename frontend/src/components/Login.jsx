import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/login', formData)
      alert('Login successful!')
    } catch (err) {
      alert('Login failed. Please check your credentials.', err)
    }
  }

  const inputClasses =
    'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'

  return (
    <div className="bg-gray-50 flex flex-col px-4">
      <div className="max-w-sm bg-white shadow-md p-6 rounded-xl border">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-sm text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: john@example.com"
              className={inputClasses}
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-medium text-sm text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="ex: secret123"
              className={inputClasses}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
