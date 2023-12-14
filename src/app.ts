const path = require('path')
const express = require('express')
import { weather } from "../../AsyncProgramming/app"



const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))




app.get('/weather', (req:any, res:any) =>{


    
    if(!req.query.location){
        return res.send('You need to provide a location name')
    } 

    weather(req.query.location, (err:any, result:any)=>{
        if(err){
            return res.send(err)
        }

        res.send(result.temprature)
    })

    
})


app.get('*', (req:any, res:any) => {
    res.send("Error 404 page not found")

})


app.listen(3000, ()=>{
    console.log('The server is running on port 3000')
})