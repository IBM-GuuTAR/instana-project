export const severityToText = () => {
    if (issue.severity === 5) {
        return "Warning"
    }
    else if (issue.severity === 10) {
        return "Error"
    }
}