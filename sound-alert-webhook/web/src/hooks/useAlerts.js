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
          console.log(issue.id)
          if (issue.severity === 5) {
            playWarningSound()
            setWarningAlerts((oldState) => [...oldState, { source: issue.entityLabel, reason: issue.text, severity: issue.severity }])
          }
          else if (issue.severity === 10) {
            playErrorSound()
            setErrorAlerts((oldState) => [...oldState, { source: issue.entityLabel, reason: issue.text, severity: issue.severity }])
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