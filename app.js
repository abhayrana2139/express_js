const { response } = require("express")
const express = require("express")
const app = express()     // function calling 
const port =3000


const blogRoutes = require("./app/routes/blog")






//  Basic use
 app.use(express.json())



 // routes
 app.use(blogRoutes)


// listion port


app.listen(3000, () => {
    console.log(`server is running on ${port}`)
})


