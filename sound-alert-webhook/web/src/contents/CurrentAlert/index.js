import { ErrorAlertCard, WarningAlertCard } from "../../components/AlertCard"

export const CurrentAlert = ({ warningAlerts, errorAlerts }) => {

  return (
    <div className="Flex-row" style={{ gap: "16px" }}>
      <div className="Flex-col" style={{ gap: "16px", marginTop: "32px" }}>
        {warningAlerts.map((alert, idx) => (
          <WarningAlertCard key={idx} {...alert} />
        ))}
      </div>
      <div className="Flex-col" style={{ gap: "16px", marginTop: "32px" }}>
        {errorAlerts.map((alert, idx) => (
          <ErrorAlertCard key={idx} {...alert} />
        ))}
      </div>
    </div>
  );
};
