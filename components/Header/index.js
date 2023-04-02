import React, { useContext } from 'react'
import { ThemeContext } from '@/context/themeСontext'
import { MdSunny, MdDarkMode } from 'react-icons/md' 


const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme)
  }

  return (
    <header className={`header ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='container-fluid'>
        <div className='header__wrapper'>
          <h1>Справочник стран</h1>
          <button onClick={toggleTheme}>
            {darkTheme ? (
              <>
                <MdDarkMode />
                <span className='theme-label'>&nbsp;Темная</span>
              </>
            ) : (
              <>
                <MdSunny />
                <span className='theme-label'>&nbsp;Светлая</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
