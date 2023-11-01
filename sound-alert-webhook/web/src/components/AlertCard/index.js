import './style.css'

export const AlertCard = ({title, source, reason}) => {
    return <> 
        <p>[{title}] come from {source}</p>
        <p>{reason}</p>
    </>
}

export const ErrorAlertCard = (props) => {
    return <div className="Error-card"> 
        <AlertCard title='Error' {...props} />
    </div>
}

export const WarningAlertCard = (props) => {
    return <div className="Warning-card"> 
        <AlertCard title='Warning' {...props} />
    </div>
}