const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080

const app = express()

app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send({'message': 'Hello world!'}).end()
})

app.post('/webhook', (req, res) => {
    console.log(req.body)
    res.send({'message': 'my webhook!'}).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

