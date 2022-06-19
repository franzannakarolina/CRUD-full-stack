const express = require('express')

const router = express.Router()

app.post('/api', (req, res) => {
    res.send({ ok: true})
})


module.exports = app => app.use('/api', router)