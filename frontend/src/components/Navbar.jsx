import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Alumni Connect
        </h1>
        <button onClick={toggleDarkMode}>
          
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className={`text-xl cursor-pointer ${
              darkMode ? 'text-yellow-400' : 'text-yellow-800'
            }`}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
