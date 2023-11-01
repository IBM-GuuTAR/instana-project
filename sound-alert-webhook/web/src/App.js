import './App.css'
import { ErrorAlertCard, WarningAlertCard } from './components/AlertCard'
import { playWarningSound, playErrorSound } from './services/playSound'
import { useAlerts } from './hooks/useAlerts'

function App() {
  const { warningAlerts, errorAlerts } = useAlerts()

  return (
    <div className="App">
      <header className="App-header">
        <h2>Alert Center</h2>
        <div className="Flex-row" style={{ gap: '16px', alignItems: 'center' }}>
          <label>Test sound</label>
          <button onClick={playWarningSound}>Warning</button>
          <button onClick={playErrorSound}>Error</button>
        </div>
        <div className="Flex-row" style={{ gap: '16px' }}>
          <div className="Flex-col" style={{ gap: '16px', marginTop: '32px' }}>
            {warningAlerts.map((alert, idx) => <WarningAlertCard key={idx} {...alert} />)}
          </div>
          <div className="Flex-col" style={{ gap: '16px', marginTop: '32px' }}>
            {errorAlerts.map((alert, idx) => <ErrorAlertCard key={idx} {...alert} />)}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
