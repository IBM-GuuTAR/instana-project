import { ErrorAlertCard, WarningAlertCard } from "../../components/AlertCard"

export const History = ({ allAlerts }) => {
    return <div className="Flex-col" style={{ gap: '16px', marginTop: '32px' }}>
        {allAlerts.map(alert => {
            if (alert.severity === 5) {
                return <WarningAlertCard key={alert.id} {...alert} />
            }
            else if (alert.severity === 10) {
                return <ErrorAlertCard key={alert.id} {...alert} />
            }
            return null
        })}
    </div>
}