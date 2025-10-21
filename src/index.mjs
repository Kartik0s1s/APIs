import express from 'express'

const app = express();


app.get("/",(req, resp)=>{
  resp.send("Our Api is ready ")
  resp.end()
})
 
//


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("App is running on 3000")
})
