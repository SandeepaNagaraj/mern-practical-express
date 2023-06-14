const express = require('express')
const app = express()
const servicePage = require('./services')
const PORT = 5000
app.get('/',(req,res)=>{
  res.send("commercial")
})

app.use('/service',servicePage)
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))