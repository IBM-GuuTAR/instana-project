const express = require('express')

const PORT = 8080

const app = express()

app.get('/', (_, res) => {
    res.send({'message': 'Hello world!'}).end()
})

app.post('/webhook', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

