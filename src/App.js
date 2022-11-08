import logo from './logo.png';
import './App.css';
import ReactSwitch from 'react-switch';
import { useState } from "react";
import { useThemeContext } from './context/ThemeContext';

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()

  const [checked, setChecked] = useState(false)
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "light"? "dark":"light"))
    setChecked(nextChecked)
  }


  return (
    <div className="App">
      <header className="App-header" id={contextTheme}>
        <ReactSwitch 
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"/>
        <h2>{contextTheme} mode</h2>
        <img src={logo} className="App-logo" alt="logo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
