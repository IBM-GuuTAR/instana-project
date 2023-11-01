export const severityToText = () => {
    if (issue.severity === 5) {
        return "warning"
    }
    else if (issue.severity === 10) {
        return "error"
    }
}