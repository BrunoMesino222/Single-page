import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Home = () => {
  const {contextTheme} = useThemeContext()  
  return (
    <div>
        <h2>Home</h2>
        <p>Pagina de inicio</p>
        <p>Theme {contextTheme}</p>
    </div>
  )
}

export default Home