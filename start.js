const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('착한사람이 왔어요~')
})

app.listen(8080)