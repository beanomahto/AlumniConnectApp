import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    batch: '',
    branch: '',
    jobTitle: '',
    company: '',
    location: '',
    bio: '',
    profilePicture: '',
    linkedin: '',
    github: '',
    twitter: '',
    tags: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
      socialLinks: {
        linkedin: formData.linkedin,
        github: formData.github,
        twitter: formData.twitter,
      },
    }

    try {
      await axios.post('/api/auth/signup', payload)
      alert('Signup successful!')
    } catch (err) {
      alert('Signup failed.', err)
    }
  }

  const inputClasses =
    'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'

  const fields = [
    { name: 'name', type: 'text', required: true, placeholder: 'ex: John Doe' },
    {
      name: 'email',
      type: 'email',
      required: true,
      placeholder: 'ex: john@example.com',
    },
    {
      name: 'password',
      type: 'password',
      required: true,
      placeholder: 'ex: secret123',
    },
    { name: 'batch', type: 'number', required: false, placeholder: 'ex: 2020' },
    {
      name: 'branch',
      type: 'text',
      required: false,
      placeholder: 'ex: Computer Science',
    },
    {
      name: 'jobTitle',
      type: 'text',
      required: false,
      placeholder: 'ex: Software Engineer',
    },
    {
      name: 'company',
      type: 'text',
      required: false,
      placeholder: 'ex: Google',
    },
    {
      name: 'location',
      type: 'text',
      required: false,
      placeholder: 'ex: Bangalore, India',
    },
    {
      name: 'bio',
      type: 'text',
      required: false,
      placeholder: 'ex: Passionate coder and traveler',
    },
    {
      name: 'profilePicture',
      type: 'text',
      required: false,
      placeholder: 'ex: https://link.to/photo.jpg',
    },
    {
      name: 'linkedin',
      type: 'text',
      required: false,
      placeholder: 'ex: https://linkedin.com/in/username',
    },
    {
      name: 'github',
      type: 'text',
      required: false,
      placeholder: 'ex: https://github.com/username',
    },
    {
      name: 'twitter',
      type: 'text',
      required: false,
      placeholder: 'ex: https://twitter.com/username',
    },
    {
      name: 'tags',
      type: 'text',
      required: false,
      placeholder: 'ex: React, Node.js, Alumni',
    },
  ]

  return (
    <div className="max-w-xl w-full bg-white shadow-md p-6 rounded-xl border">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col space-y-1">
            <label className="font-medium text-sm text-gray-700">
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`${inputClasses} ${
                field.name === 'batch' ? 'appearance-none' : ''
              }`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
