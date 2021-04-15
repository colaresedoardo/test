import express from 'express'
import bodyParser from 'body-parser'
// import saml2 from 'saml2-js'
// import fs from 'fs'

let app = express()
app.use(bodyParser.json());

app.get( '/', (req, resp)=>{
    resp.send("it's worked")
} )

let port = 5000
const server = app.listen(port, ()=>{
    console.info(`running on port ${port}...`)
})