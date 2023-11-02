import { useState } from 'react'

import './style.css'

import { CurrentAlert } from '../../contents/CurrentAlert'
import { History } from '../../contents/History'
import { useAlerts } from '../../hooks/useAlerts'

export const Menu = () => {
    const [contextIdx, setContentIdx] = useState(0)

    const { allAlerts, warningAlerts, errorAlerts } = useAlerts()

    return <div className="Flex-col">
        <div className="Flex-row" style={{ gap: '16px', justifyContent: 'center', marginTop: '16px' }}>
            <button className="Text-button" onClick={() => setContentIdx(0)}>Current Alert</button>
            <button className="Text-button" onClick={() => setContentIdx(1)}>History</button>
        </div>
        {contextIdx === 0 ? <CurrentAlert warningAlerts={warningAlerts} errorAlerts={errorAlerts} /> : null}
        {contextIdx === 1 ? <History allAlerts={allAlerts} /> : null}
    </div>
}