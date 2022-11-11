import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const {contextTheme} = useThemeContext()  
  return (
    <div>
        <h2>Contact</h2>
        <p>Pagina de contacto</p>
        <p>Theme {contextTheme}</p>
    </div>
  )
}

export default Contact