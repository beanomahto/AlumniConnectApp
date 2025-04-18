const Directory = ({ users = [] }) => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center space-x-4">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="font-semibold">{user.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Directory
