import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const {contextTheme} = useThemeContext()  
  return (
    <div>
        <h2>Contact</h2>
        <p>Theme {contextTheme}</p>
        <p>Pagina de contacto</p>
    </div>
  )
}

export default Contact