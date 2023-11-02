import { useState } from "react"

import "./App.css"
import { playWarningSound, playErrorSound } from "./services/playSound"
import { Menu } from "./components/Menu"

function App() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Alert Center</h2>
        {isEnabled ? (
          <>
            <label>Receiving Alert</label>
            <div
              className="Flex-row"
              style={{ gap: "16px", alignItems: "center", marginTop: "16px" }}
            >  
              <button onClick={playWarningSound}>Warning Sound</button>
              <button onClick={playErrorSound}>Error Sound</button>
            </div>
            <Menu />
          </>
        ) : (
          <div>
            <p>Start receiving alert here</p>
            <button
              onClick={() => {
                playWarningSound()
                setIsEnabled(true)
              }}
            >
              Let's start
            </button>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
