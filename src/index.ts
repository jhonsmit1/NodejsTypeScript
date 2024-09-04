import express from 'express' //ESmodules
//const express = require('express') -> CommonJS
import router from './routes/diaries'
const app = express()

app.use(express.json())

const PORT=3000

app.get('/ping',(_req,res) => {
    console.log('someone ping here!!' )
    res.send('pong')
})

app.use('/api/diaries',router)


app.listen(PORT,() => {
    console.log(`server is running at http://localhost:${PORT}`)
})