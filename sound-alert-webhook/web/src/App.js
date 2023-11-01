import { useState } from "react"

import "./App.css"
import { ErrorAlertCard, WarningAlertCard } from "./components/AlertCard"
import { playWarningSound, playErrorSound } from "./services/playSound"
import { useAlerts } from "./hooks/useAlerts"

function App() {
  const { warningAlerts, errorAlerts } = useAlerts()

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
            <div className="Flex-row" style={{ gap: "16px" }}>
              <div
                className="Flex-col"
                style={{ gap: "16px", marginTop: "32px" }}
              >
                {warningAlerts.map((alert, idx) => (
                  <WarningAlertCard key={idx} {...alert} />
                ))}
              </div>
              <div
                className="Flex-col"
                style={{ gap: "16px", marginTop: "32px" }}
              >
                {errorAlerts.map((alert, idx) => (
                  <ErrorAlertCard key={idx} {...alert} />
                ))}
              </div>
            </div>
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
