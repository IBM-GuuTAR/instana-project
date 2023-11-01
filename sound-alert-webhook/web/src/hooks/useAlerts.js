import { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

import { playErrorSound, playWarningSound } from "../services/playSound"
import { BACKEND_URL } from '../config/config'

export const useAlerts = () => {
    const [warningAlerts, setWarningAlerts] = useState([])
    const [errorAlerts, setErrorAlerts] = useState([])

    useEffect(() => {
        const socket = socketIOClient(BACKEND_URL ?? 'http://localhost:8080/')
    
        const onConnect = () => {
            console.log('Ready to listen alerting')
        }
    
        const onDisconnect = () => {
            console.log('Disconnected')
        }
    
        const onAlert = ({ issue }) => {
          const { id, state, severity, entityLabel, text } = issue
          console.log(`Alert id=${id} (${state}) }`)

          if (state === 'OPEN') {
            if (severity === 5) {
              playWarningSound()
              setWarningAlerts((currState) => [{ id: id, source: entityLabel, reason: text, severity: severity }, ...currState])
            }
            else if (severity === 10) {
              playErrorSound()
              setErrorAlerts((currState) => [{ id: id, source: entityLabel, reason: text, severity: severity }, ...currState])
            }
          }
          else if (state === 'CLOSED') {
            if (severity === 5) {
              setWarningAlerts((currState) => currState.filter(alert => alert.id !== id))
            }
            else if (severity === 10) {
              setErrorAlerts((currState) => currState.filter(alert => alert.id !== id))
            }
          }
        }
    
        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('alert', onAlert)
    
        return () => {
          socket.off('connect', onConnect)
          socket.off('disconnect', onDisconnect)
          socket.off('alert', onAlert)
        }
      }, [])

      return { warningAlerts, errorAlerts }
}