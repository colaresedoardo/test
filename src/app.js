import express from 'express'
// import bodyParse from 'body-parser'
// import saml2 from 'saml2-js'
// import fs from 'fs'

let app = express()
app.use(bodyParser.json());

app.get( '/', (req, resp)=>{
    resp.send("it's worked")
} )


const server = app.listen(5000, ()=>{
    console.info(`running on port ${port}...`)
})