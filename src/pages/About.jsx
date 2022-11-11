import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const About = () => {
  const {contextTheme} = useThemeContext()  
  return (
    <div>
        <h2>About</h2>
        <p>About us</p>
        <p>Theme {contextTheme}</p>
    </div>
  )
}

export default About