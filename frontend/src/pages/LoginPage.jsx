import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6">Log In</h1>
      <Login />
    </div>
  )
}

export default LoginPage
