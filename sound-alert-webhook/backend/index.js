const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")

const PORT = 8080

const app = express()

const server = http.createServer(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})

app.use(bodyParser.json())

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

io.on("connection", (client) => {
  console.log("user connected")

  client.on("disconnect", () => {
    console.log("user disconnected")
  })
})

app.get("/", (_, res) => {
  res.send({ message: "Hello world!" }).end()
})

app.post("/webhook", (req, res) => {
  // For testing
  // const choice = Math.round(Math.random())
  // console.log(choice)
  // io.emit("alert", {
  //   issue: {
  //     id: "pPkeWHfuRJmCB9W43dN4aA",
  //     type: "issue",
  //     state: "OPEN",
  //     start: 1698773803259,
  //     severity: choice === 0 ? 5: 10,
  //     text: "Erroneous call rate is higher than 0.2%",
  //     suggestion: "The erroneous call rate is higher or equal to 0.2%.",
  //     link: "https://ibmdevsandbox-instanaibm.instana.io/#/eventseventId=pPkeWHfuRJmCB9W43dN4aA?&snapshotId=iRa01DamU-7_XQ17IXrpAs5oHdU&timeline.ws=600000&timeline.to=1698774103259&timeline.fm=1698773803259",
  //     entityType: "Application",
  //     customZone: "not available",
  //     availabilityZone: "not available",
  //     zone: "not available",
  //     fqdn: "not available",
  //     entity: "Application",
  //     entityLabel: "Robotshop-PTS",
  //     tags: "not available",
  //     container: "not available",
  //     service: "not available",
  //     containerNames: [],
  //     metricName: "errors",
  //     metricAggregation: "not available",
  //     metricValue: "0.0022",
  //     metricUnit: "PERCENTAGE",
  //     thresholdValue: "0.001",
  //     customPayloads: {},
  //   },
  // })

  console.log("New alert alive", req.body)

  io.emit("alert", req.body)

  res.send({ message: "my webhook!" }).end()
})
