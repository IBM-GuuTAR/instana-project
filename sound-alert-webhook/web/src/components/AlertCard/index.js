import "./style.css";

export const AlertCard = ({ title, source, reason, timestamp }) => {
  const date = new Date(timestamp * 1000);

  return (
    <div>
      <p>
        [{title}] come from {source}
      </p>
      <p>{reason}</p>
      {timestamp ? <p>{date.toString()}</p> : null}
    </div>
  );
};

export const ErrorAlertCard = (props) => {

  return (
    <div className="Error-card Flex-row">
      {props.state ? (
        <label style={{ padding: "16px 0px 0px 16px", width: "150px" }}>
          {props.state}
        </label>
      ) : null}
      <AlertCard title="Error" {...props} />
    </div>
  );
};

export const WarningAlertCard = (props) => {

  return (
    <div className="Warning-card Flex-row">
      {props.state ? (
        <label style={{ padding: "16px 0px 0px 16px", width: "150px" }}>
          {props.state}
        </label>
      ) : null}
      <AlertCard title="Warning" {...props} />
    </div>
  );
};
